// Types
import { NextFunction, Request, Response } from 'express';
// Modules
import { errorHandler } from '@middlewares/error-handler';
// Errors
import { CustomError } from '@errors/custom-error';
import { BadRequestError } from '@errors/bad-request-error';
import { UnprocessableEntityError } from '@errors/unprocessable-entity-error';
import { UnauthorizedError } from '@errors/unauthorized-error';

// Mock AppLogger dependency
jest.mock('@logger/app.logger', () => ({
  logger: {
    error: jest.fn(),
  },
}));

// Reusable mocks
let mockRequest: Partial<Request>;
let mockResponse: Partial<Response>;

describe('Error handler middleware', () => {
  beforeEach(() => {
    // Reset reusable mocks
    mockRequest = {};
    mockResponse = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };
  });

  test('Given an unhandled exception When error is thrown Then response should send an Internal server error', async () => {
    const nextFunction: NextFunction = jest.fn();

    errorHandler(
      new Error('Unhandled exception error'),
      mockRequest as Request,
      mockResponse as Response,
      nextFunction,
    );

    expect(mockResponse.status).toHaveBeenCalledWith(500);
    expect(mockResponse.send).toHaveBeenCalledWith({
      status: 500,
      message: 'Internal server error',
    });
    expect(nextFunction).not.toHaveBeenCalled();
  });

  describe('Given a custom error', () => {
    describe('Given a bad request error', () => {
      test('When a required parameter is missing Then response should send Missing parameter error', async () => {
        const error: CustomError = new BadRequestError([
          {
            value: undefined,
            msg: 'message',
            param: 'param',
            location: 'body',
          },
        ]);
        const nextFunction: NextFunction = jest.fn();

        errorHandler(error as CustomError, mockRequest as Request, mockResponse as Response, nextFunction);

        expect(mockResponse.status).toHaveBeenCalledWith(400);
        expect(mockResponse.send).toHaveBeenCalledWith({
          status: 400,
          error: 'Missing parameter [param] in [body]',
        });
        expect(nextFunction).not.toHaveBeenCalled();
      });

      test('When a parameter is invalid Then response should send Invalid parameter error', async () => {
        const error: CustomError = new BadRequestError([
          {
            value: 'value',
            msg: 'message',
            param: 'param',
            location: 'body',
          },
        ]);
        const nextFunction: NextFunction = jest.fn();

        errorHandler(error as CustomError, mockRequest as Request, mockResponse as Response, nextFunction);

        expect(mockResponse.status).toHaveBeenCalledWith(400);
        expect(mockResponse.send).toHaveBeenCalledWith({
          status: 400,
          error: 'Invalid parameter [param] in [body]',
          message: 'message',
        });
        expect(nextFunction).not.toHaveBeenCalled();
      });

      test('When a multiple parameters are invalid or missing Then response should send multiple errors', async () => {
        const error: CustomError = new BadRequestError([
          {
            value: 'value',
            msg: 'message',
            param: 'param_1',
            location: 'body',
          },
          {
            value: undefined,
            msg: 'value',
            param: 'param_2',
            location: 'body',
          },
        ]);
        const nextFunction: NextFunction = jest.fn();

        errorHandler(error as CustomError, mockRequest as Request, mockResponse as Response, nextFunction);

        expect(mockResponse.status).toHaveBeenCalledWith(400);
        expect(mockResponse.send).toHaveBeenCalledWith({
          status: 400,
          errors: [
            {
              error: 'Invalid parameter [param_1] in [body]',
              message: 'message',
            },
            {
              error: 'Missing parameter [param_2] in [body]',
            },
          ],
        });
        expect(nextFunction).not.toHaveBeenCalled();
      });
    });

    test('Given an unprocessable entity When error is thrown Then response should send an Unprocessable Entity error', async () => {
      const error: CustomError = new UnprocessableEntityError('message');

      const nextFunction: NextFunction = jest.fn();

      errorHandler(error as CustomError, mockRequest as Request, mockResponse as Response, nextFunction);

      expect(mockResponse.status).toHaveBeenCalledWith(422);
      expect(mockResponse.send).toHaveBeenCalledWith({
        status: 422,
        error: 'Unprocessable Entity',
        message: 'message',
      });
      expect(nextFunction).not.toHaveBeenCalled();
    });

    test('Given an unauthorized request When an error is thrown Then response should include', async () => {
      const error: CustomError = new UnauthorizedError('message');

      const nextFunction: NextFunction = jest.fn();

      errorHandler(error as CustomError, mockRequest as Request, mockResponse as Response, nextFunction);

      expect(mockResponse.status).toHaveBeenCalledWith(401);
      expect(mockResponse.send).toHaveBeenCalledWith({
        status: 401,
        message: 'message',
      });
      expect(nextFunction).not.toHaveBeenCalled();
    });
  });
});
