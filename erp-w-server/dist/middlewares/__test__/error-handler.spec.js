"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const error_handler_1 = require("@middlewares/error-handler");
const bad_request_error_1 = require("@errors/bad-request-error");
const unprocessable_entity_error_1 = require("@errors/unprocessable-entity-error");
const unauthorized_error_1 = require("@errors/unauthorized-error");
jest.mock('@logger/app.logger', () => ({
    logger: {
        error: jest.fn(),
    },
}));
let mockRequest;
let mockResponse;
describe('Error handler middleware', () => {
    beforeEach(() => {
        mockRequest = {};
        mockResponse = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn(),
        };
    });
    test('Given an unhandled exception When error is thrown Then response should send an Internal server error', async () => {
        const nextFunction = jest.fn();
        (0, error_handler_1.errorHandler)(new Error('Unhandled exception error'), mockRequest, mockResponse, nextFunction);
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
                const error = new bad_request_error_1.BadRequestError([
                    {
                        value: undefined,
                        msg: 'message',
                        param: 'param',
                        location: 'body',
                    },
                ]);
                const nextFunction = jest.fn();
                (0, error_handler_1.errorHandler)(error, mockRequest, mockResponse, nextFunction);
                expect(mockResponse.status).toHaveBeenCalledWith(400);
                expect(mockResponse.send).toHaveBeenCalledWith({
                    status: 400,
                    error: 'Missing parameter [param] in [body]',
                });
                expect(nextFunction).not.toHaveBeenCalled();
            });
            test('When a parameter is invalid Then response should send Invalid parameter error', async () => {
                const error = new bad_request_error_1.BadRequestError([
                    {
                        value: 'value',
                        msg: 'message',
                        param: 'param',
                        location: 'body',
                    },
                ]);
                const nextFunction = jest.fn();
                (0, error_handler_1.errorHandler)(error, mockRequest, mockResponse, nextFunction);
                expect(mockResponse.status).toHaveBeenCalledWith(400);
                expect(mockResponse.send).toHaveBeenCalledWith({
                    status: 400,
                    error: 'Invalid parameter [param] in [body]',
                    message: 'message',
                });
                expect(nextFunction).not.toHaveBeenCalled();
            });
            test('When a multiple parameters are invalid or missing Then response should send multiple errors', async () => {
                const error = new bad_request_error_1.BadRequestError([
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
                const nextFunction = jest.fn();
                (0, error_handler_1.errorHandler)(error, mockRequest, mockResponse, nextFunction);
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
            const error = new unprocessable_entity_error_1.UnprocessableEntityError('message');
            const nextFunction = jest.fn();
            (0, error_handler_1.errorHandler)(error, mockRequest, mockResponse, nextFunction);
            expect(mockResponse.status).toHaveBeenCalledWith(422);
            expect(mockResponse.send).toHaveBeenCalledWith({
                status: 422,
                error: 'Unprocessable Entity',
                message: 'message',
            });
            expect(nextFunction).not.toHaveBeenCalled();
        });
        test('Given an unauthorized request When an error is thrown Then response should include', async () => {
            const error = new unauthorized_error_1.UnauthorizedError('message');
            const nextFunction = jest.fn();
            (0, error_handler_1.errorHandler)(error, mockRequest, mockResponse, nextFunction);
            expect(mockResponse.status).toHaveBeenCalledWith(401);
            expect(mockResponse.send).toHaveBeenCalledWith({
                status: 401,
                message: 'message',
            });
            expect(nextFunction).not.toHaveBeenCalled();
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItaGFuZGxlci5zcGVjLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsibWlkZGxld2FyZXMvX190ZXN0X18vZXJyb3ItaGFuZGxlci5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0EsOERBQTBEO0FBRzFELGlFQUE0RDtBQUM1RCxtRkFBOEU7QUFDOUUsbUVBQStEO0FBRy9ELElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUNyQyxNQUFNLEVBQUU7UUFDTixLQUFLLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRTtLQUNqQjtDQUNGLENBQUMsQ0FBQyxDQUFDO0FBR0osSUFBSSxXQUE2QixDQUFDO0FBQ2xDLElBQUksWUFBK0IsQ0FBQztBQUVwQyxRQUFRLENBQUMsMEJBQTBCLEVBQUUsR0FBRyxFQUFFO0lBQ3hDLFVBQVUsQ0FBQyxHQUFHLEVBQUU7UUFFZCxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLFlBQVksR0FBRztZQUNiLE1BQU0sRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsY0FBYyxFQUFFO1lBQ2xDLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFO1NBQ2hCLENBQUM7SUFDSixDQUFDLENBQUMsQ0FBQztJQUVILElBQUksQ0FBQyxzR0FBc0csRUFBRSxLQUFLLElBQUksRUFBRTtRQUN0SCxNQUFNLFlBQVksR0FBaUIsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBRTdDLElBQUEsNEJBQVksRUFDVixJQUFJLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxFQUN0QyxXQUFzQixFQUN0QixZQUF3QixFQUN4QixZQUFZLENBQ2IsQ0FBQztRQUVGLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEQsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxvQkFBb0IsQ0FB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QUUsS0FBSyxJQUFJLEVBQUU7WUFDcEcsTUFBTSxLQUFLLEdBQWdCLElBQUksc0NBQWlCLENBQUMsU0FBUyxDQUFDLENBQUM7WUFFNUQsTUFBTSxZQUFZLEdBQWlCLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUU3QyxJQUFBLDRCQUFZLEVBQUMsS0FBb0IsRUFBRSxXQUFzQixFQUFFLFlBQXdCLEVBQUUsWUFBWSxDQUFDLENBQUM7WUFFbkcsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN0RCxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLG9CQUFvQixDQUFDO2dCQUM3QyxNQUFNLEVBQUUsR0FBRztnQkFDWCxPQUFPLEVBQUUsU0FBUzthQUNuQixDQUFDLENBQUM7WUFDSCxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDOUMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVHlwZXNcbmltcG9ydCB7IE5leHRGdW5jdGlvbiwgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJztcbi8vIE1vZHVsZXNcbmltcG9ydCB7IGVycm9ySGFuZGxlciB9IGZyb20gJ0BtaWRkbGV3YXJlcy9lcnJvci1oYW5kbGVyJztcbi8vIEVycm9yc1xuaW1wb3J0IHsgQ3VzdG9tRXJyb3IgfSBmcm9tICdAZXJyb3JzL2N1c3RvbS1lcnJvcic7XG5pbXBvcnQgeyBCYWRSZXF1ZXN0RXJyb3IgfSBmcm9tICdAZXJyb3JzL2JhZC1yZXF1ZXN0LWVycm9yJztcbmltcG9ydCB7IFVucHJvY2Vzc2FibGVFbnRpdHlFcnJvciB9IGZyb20gJ0BlcnJvcnMvdW5wcm9jZXNzYWJsZS1lbnRpdHktZXJyb3InO1xuaW1wb3J0IHsgVW5hdXRob3JpemVkRXJyb3IgfSBmcm9tICdAZXJyb3JzL3VuYXV0aG9yaXplZC1lcnJvcic7XG5cbi8vIE1vY2sgQXBwTG9nZ2VyIGRlcGVuZGVuY3lcbmplc3QubW9jaygnQGxvZ2dlci9hcHAubG9nZ2VyJywgKCkgPT4gKHtcbiAgbG9nZ2VyOiB7XG4gICAgZXJyb3I6IGplc3QuZm4oKSxcbiAgfSxcbn0pKTtcblxuLy8gUmV1c2FibGUgbW9ja3NcbmxldCBtb2NrUmVxdWVzdDogUGFydGlhbDxSZXF1ZXN0PjtcbmxldCBtb2NrUmVzcG9uc2U6IFBhcnRpYWw8UmVzcG9uc2U+O1xuXG5kZXNjcmliZSgnRXJyb3IgaGFuZGxlciBtaWRkbGV3YXJlJywgKCkgPT4ge1xuICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICAvLyBSZXNldCByZXVzYWJsZSBtb2Nrc1xuICAgIG1vY2tSZXF1ZXN0ID0ge307XG4gICAgbW9ja1Jlc3BvbnNlID0ge1xuICAgICAgc3RhdHVzOiBqZXN0LmZuKCkubW9ja1JldHVyblRoaXMoKSxcbiAgICAgIHNlbmQ6IGplc3QuZm4oKSxcbiAgICB9O1xuICB9KTtcblxuICB0ZXN0KCdHaXZlbiBhbiB1bmhhbmRsZWQgZXhjZXB0aW9uIFdoZW4gZXJyb3IgaXMgdGhyb3duIFRoZW4gcmVzcG9uc2Ugc2hvdWxkIHNlbmQgYW4gSW50ZXJuYWwgc2VydmVyIGVycm9yJywgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IG5leHRGdW5jdGlvbjogTmV4dEZ1bmN0aW9uID0gamVzdC5mbigpO1xuXG4gICAgZXJyb3JIYW5kbGVyKFxuICAgICAgbmV3IEVycm9yKCdVbmhhbmRsZWQgZXhjZXB0aW9uIGVycm9yJyksXG4gICAgICBtb2NrUmVxdWVzdCBhcyBSZXF1ZXN0LFxuICAgICAgbW9ja1Jlc3BvbnNlIGFzIFJlc3BvbnNlLFxuICAgICAgbmV4dEZ1bmN0aW9uLFxuICAgICk7XG5cbiAgICBleHBlY3QobW9ja1Jlc3BvbnNlLnN0YXR1cykudG9IYXZlQmVlbkNhbGxlZFdpdGgoNTAwKTtcbiAgICBleHBlY3QobW9ja1Jlc3BvbnNlLnNlbmQpLnRvSGF2ZUJlZW5DYWxsZWRXaXRoKHtcbiAgICAgIHN0YXR1czogNTAwLFxuICAgICAgbWVzc2FnZTogJ0ludGVybmFsIHNlcnZlciBlcnJvcicsXG4gICAgfSk7XG4gICAgZXhwZWN0KG5leHRGdW5jdGlvbikubm90LnRvSGF2ZUJlZW5DYWxsZWQoKTtcbiAgfSk7XG5cbiAgZGVzY3JpYmUoJ0dpdmVuIGEgY3VzdG9tIGVycm9yJywgKCkgPT4ge1xuICAgIGRlc2NyaWJlKCdHaXZlbiBhIGJhZCByZXF1ZXN0IGVycm9yJywgKCkgPT4ge1xuICAgICAgdGVzdCgnV2hlbiBhIHJlcXVpcmVkIHBhcmFtZXRlciBpcyBtaXNzaW5nIFRoZW4gcmVzcG9uc2Ugc2hvdWxkIHNlbmQgTWlzc2luZyBwYXJhbWV0ZXIgZXJyb3InLCBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGVycm9yOiBDdXN0b21FcnJvciA9IG5ldyBCYWRSZXF1ZXN0RXJyb3IoW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHZhbHVlOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBtc2c6ICdtZXNzYWdlJyxcbiAgICAgICAgICAgIHBhcmFtOiAncGFyYW0nLFxuICAgICAgICAgICAgbG9jYXRpb246ICdib2R5JyxcbiAgICAgICAgICB9LFxuICAgICAgICBdKTtcbiAgICAgICAgY29uc3QgbmV4dEZ1bmN0aW9uOiBOZXh0RnVuY3Rpb24gPSBqZXN0LmZuKCk7XG5cbiAgICAgICAgZXJyb3JIYW5kbGVyKGVycm9yIGFzIEN1c3RvbUVycm9yLCBtb2NrUmVxdWVzdCBhcyBSZXF1ZXN0LCBtb2NrUmVzcG9uc2UgYXMgUmVzcG9uc2UsIG5leHRGdW5jdGlvbik7XG5cbiAgICAgICAgZXhwZWN0KG1vY2tSZXNwb25zZS5zdGF0dXMpLnRvSGF2ZUJlZW5DYWxsZWRXaXRoKDQwMCk7XG4gICAgICAgIGV4cGVjdChtb2NrUmVzcG9uc2Uuc2VuZCkudG9IYXZlQmVlbkNhbGxlZFdpdGgoe1xuICAgICAgICAgIHN0YXR1czogNDAwLFxuICAgICAgICAgIGVycm9yOiAnTWlzc2luZyBwYXJhbWV0ZXIgW3BhcmFtXSBpbiBbYm9keV0nLFxuICAgICAgICB9KTtcbiAgICAgICAgZXhwZWN0KG5leHRGdW5jdGlvbikubm90LnRvSGF2ZUJlZW5DYWxsZWQoKTtcbiAgICAgIH0pO1xuXG4gICAgICB0ZXN0KCdXaGVuIGEgcGFyYW1ldGVyIGlzIGludmFsaWQgVGhlbiByZXNwb25zZSBzaG91bGQgc2VuZCBJbnZhbGlkIHBhcmFtZXRlciBlcnJvcicsIGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgZXJyb3I6IEN1c3RvbUVycm9yID0gbmV3IEJhZFJlcXVlc3RFcnJvcihbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdmFsdWU6ICd2YWx1ZScsXG4gICAgICAgICAgICBtc2c6ICdtZXNzYWdlJyxcbiAgICAgICAgICAgIHBhcmFtOiAncGFyYW0nLFxuICAgICAgICAgICAgbG9jYXRpb246ICdib2R5JyxcbiAgICAgICAgICB9LFxuICAgICAgICBdKTtcbiAgICAgICAgY29uc3QgbmV4dEZ1bmN0aW9uOiBOZXh0RnVuY3Rpb24gPSBqZXN0LmZuKCk7XG5cbiAgICAgICAgZXJyb3JIYW5kbGVyKGVycm9yIGFzIEN1c3RvbUVycm9yLCBtb2NrUmVxdWVzdCBhcyBSZXF1ZXN0LCBtb2NrUmVzcG9uc2UgYXMgUmVzcG9uc2UsIG5leHRGdW5jdGlvbik7XG5cbiAgICAgICAgZXhwZWN0KG1vY2tSZXNwb25zZS5zdGF0dXMpLnRvSGF2ZUJlZW5DYWxsZWRXaXRoKDQwMCk7XG4gICAgICAgIGV4cGVjdChtb2NrUmVzcG9uc2Uuc2VuZCkudG9IYXZlQmVlbkNhbGxlZFdpdGgoe1xuICAgICAgICAgIHN0YXR1czogNDAwLFxuICAgICAgICAgIGVycm9yOiAnSW52YWxpZCBwYXJhbWV0ZXIgW3BhcmFtXSBpbiBbYm9keV0nLFxuICAgICAgICAgIG1lc3NhZ2U6ICdtZXNzYWdlJyxcbiAgICAgICAgfSk7XG4gICAgICAgIGV4cGVjdChuZXh0RnVuY3Rpb24pLm5vdC50b0hhdmVCZWVuQ2FsbGVkKCk7XG4gICAgICB9KTtcblxuICAgICAgdGVzdCgnV2hlbiBhIG11bHRpcGxlIHBhcmFtZXRlcnMgYXJlIGludmFsaWQgb3IgbWlzc2luZyBUaGVuIHJlc3BvbnNlIHNob3VsZCBzZW5kIG11bHRpcGxlIGVycm9ycycsIGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgZXJyb3I6IEN1c3RvbUVycm9yID0gbmV3IEJhZFJlcXVlc3RFcnJvcihbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdmFsdWU6ICd2YWx1ZScsXG4gICAgICAgICAgICBtc2c6ICdtZXNzYWdlJyxcbiAgICAgICAgICAgIHBhcmFtOiAncGFyYW1fMScsXG4gICAgICAgICAgICBsb2NhdGlvbjogJ2JvZHknLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdmFsdWU6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG1zZzogJ3ZhbHVlJyxcbiAgICAgICAgICAgIHBhcmFtOiAncGFyYW1fMicsXG4gICAgICAgICAgICBsb2NhdGlvbjogJ2JvZHknLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0pO1xuICAgICAgICBjb25zdCBuZXh0RnVuY3Rpb246IE5leHRGdW5jdGlvbiA9IGplc3QuZm4oKTtcblxuICAgICAgICBlcnJvckhhbmRsZXIoZXJyb3IgYXMgQ3VzdG9tRXJyb3IsIG1vY2tSZXF1ZXN0IGFzIFJlcXVlc3QsIG1vY2tSZXNwb25zZSBhcyBSZXNwb25zZSwgbmV4dEZ1bmN0aW9uKTtcblxuICAgICAgICBleHBlY3QobW9ja1Jlc3BvbnNlLnN0YXR1cykudG9IYXZlQmVlbkNhbGxlZFdpdGgoNDAwKTtcbiAgICAgICAgZXhwZWN0KG1vY2tSZXNwb25zZS5zZW5kKS50b0hhdmVCZWVuQ2FsbGVkV2l0aCh7XG4gICAgICAgICAgc3RhdHVzOiA0MDAsXG4gICAgICAgICAgZXJyb3JzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGVycm9yOiAnSW52YWxpZCBwYXJhbWV0ZXIgW3BhcmFtXzFdIGluIFtib2R5XScsXG4gICAgICAgICAgICAgIG1lc3NhZ2U6ICdtZXNzYWdlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGVycm9yOiAnTWlzc2luZyBwYXJhbWV0ZXIgW3BhcmFtXzJdIGluIFtib2R5XScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0pO1xuICAgICAgICBleHBlY3QobmV4dEZ1bmN0aW9uKS5ub3QudG9IYXZlQmVlbkNhbGxlZCgpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0ZXN0KCdHaXZlbiBhbiB1bnByb2Nlc3NhYmxlIGVudGl0eSBXaGVuIGVycm9yIGlzIHRocm93biBUaGVuIHJlc3BvbnNlIHNob3VsZCBzZW5kIGFuIFVucHJvY2Vzc2FibGUgRW50aXR5IGVycm9yJywgYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgZXJyb3I6IEN1c3RvbUVycm9yID0gbmV3IFVucHJvY2Vzc2FibGVFbnRpdHlFcnJvcignbWVzc2FnZScpO1xuXG4gICAgICBjb25zdCBuZXh0RnVuY3Rpb246IE5leHRGdW5jdGlvbiA9IGplc3QuZm4oKTtcblxuICAgICAgZXJyb3JIYW5kbGVyKGVycm9yIGFzIEN1c3RvbUVycm9yLCBtb2NrUmVxdWVzdCBhcyBSZXF1ZXN0LCBtb2NrUmVzcG9uc2UgYXMgUmVzcG9uc2UsIG5leHRGdW5jdGlvbik7XG5cbiAgICAgIGV4cGVjdChtb2NrUmVzcG9uc2Uuc3RhdHVzKS50b0hhdmVCZWVuQ2FsbGVkV2l0aCg0MjIpO1xuICAgICAgZXhwZWN0KG1vY2tSZXNwb25zZS5zZW5kKS50b0hhdmVCZWVuQ2FsbGVkV2l0aCh7XG4gICAgICAgIHN0YXR1czogNDIyLFxuICAgICAgICBlcnJvcjogJ1VucHJvY2Vzc2FibGUgRW50aXR5JyxcbiAgICAgICAgbWVzc2FnZTogJ21lc3NhZ2UnLFxuICAgICAgfSk7XG4gICAgICBleHBlY3QobmV4dEZ1bmN0aW9uKS5ub3QudG9IYXZlQmVlbkNhbGxlZCgpO1xuICAgIH0pO1xuXG4gICAgdGVzdCgnR2l2ZW4gYW4gdW5hdXRob3JpemVkIHJlcXVlc3QgV2hlbiBhbiBlcnJvciBpcyB0aHJvd24gVGhlbiByZXNwb25zZSBzaG91bGQgaW5jbHVkZScsIGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IGVycm9yOiBDdXN0b21FcnJvciA9IG5ldyBVbmF1dGhvcml6ZWRFcnJvcignbWVzc2FnZScpO1xuXG4gICAgICBjb25zdCBuZXh0RnVuY3Rpb246IE5leHRGdW5jdGlvbiA9IGplc3QuZm4oKTtcblxuICAgICAgZXJyb3JIYW5kbGVyKGVycm9yIGFzIEN1c3RvbUVycm9yLCBtb2NrUmVxdWVzdCBhcyBSZXF1ZXN0LCBtb2NrUmVzcG9uc2UgYXMgUmVzcG9uc2UsIG5leHRGdW5jdGlvbik7XG5cbiAgICAgIGV4cGVjdChtb2NrUmVzcG9uc2Uuc3RhdHVzKS50b0hhdmVCZWVuQ2FsbGVkV2l0aCg0MDEpO1xuICAgICAgZXhwZWN0KG1vY2tSZXNwb25zZS5zZW5kKS50b0hhdmVCZWVuQ2FsbGVkV2l0aCh7XG4gICAgICAgIHN0YXR1czogNDAxLFxuICAgICAgICBtZXNzYWdlOiAnbWVzc2FnZScsXG4gICAgICB9KTtcbiAgICAgIGV4cGVjdChuZXh0RnVuY3Rpb24pLm5vdC50b0hhdmVCZWVuQ2FsbGVkKCk7XG4gICAgfSk7XG4gIH0pO1xufSk7XG4iXX0=