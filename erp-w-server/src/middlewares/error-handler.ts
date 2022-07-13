// Externals
import { NextFunction, Request, Response } from 'express';
// Modules
import AppLogger from '@logger/app.logger';
// Errors
import { CustomError } from '../errors/custom-error';

/**
 * `isErrorObject`.
 *
 * Type guard to check if an object implements an error object interface.
 * Checks if the passed in object contains specific properties and returns
 * a type predicate.
 * 
 * @param {object} obj
 * @return {boolean} obj is

 */

function isErrorObject(obj: object): obj is {
  error?: string;
  message?: string;
} {
  return 'error' in obj || 'message' in obj;
}

/**
 * `ErrorHandler`.
 *
 * Middleware for processing and handling thrown exceptions.
 * Formats an error object depending on the type and content of a
 * caught exception to normalizes the structure of error responses.
 * 
 * - Injects response status code into the response body.
 * - Appends serialized error's first entry to the response body if
 * it contains a single entry.
 * - Appends serialized errors to the response body if it's an array
 * with multiple entries.

 *
 * @param {Error} err
 * @param {Request} _req
 * @param {Response} res
 * @param {NextFunction} _next

 */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const errorHandler = (err: Error, _req: Request, res: Response, _next: NextFunction) => {
  // _next function is required even though it is not explicitly called. For the middleware to
  // take effect we still need it as a parameter, hence the eslint-disable line.

  // When an instance of CustomError is caught, respond according to error context.
  if (err instanceof CustomError) {
    // Create an immutable baseError object containing response status code.
    const baseError = { status: err.statusCode };
    // Get serialized errors from error
    const serializedErrors = err.serializeErrors();

    // If serialized errors is an object
    if (isErrorObject(serializedErrors))
      // Append error and message to base error and send error response.
      return res.status(err.statusCode).send(Object.assign(baseError, serializedErrors));

    // If serialized errors is an rray containg a single entry.
    if (Array.isArray(serializedErrors) && serializedErrors.length == 1)
      // Append entry error and message to the base error and send error response.
      return res
        .status(err.statusCode)
        .send(Object.assign(baseError, { error: serializedErrors[0].error, message: serializedErrors[0].message }));

    // Otherwise, append serialized errors to the base error and send error response.
    return res.status(err.statusCode).send(Object.assign(baseError, { errors: serializedErrors }));
  }

  // If exception was not handled.
  // Log error stack ( developmenet and production environments ).
  AppLogger.logger.error(err.stack);

  // Send back an Internal server error response.
  return res.status(500).send({ status: 500, message: 'Internal server error' });
};
