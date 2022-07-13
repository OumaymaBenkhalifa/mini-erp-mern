import { CustomError } from './custom-error';
import { ValidationError } from 'express-validator';

export class BadRequestError extends CustomError {
  statusCode = 400;

  constructor(public errors: ValidationError[]) {
    super();
    Object.setPrototypeOf(this, BadRequestError.prototype);
  }

  serializeErrors() {
    return this.errors.map((err) => {
      if (typeof err.value === 'undefined')
        return {
          error: `Missing parameter [${err.param}] in [${err.location}]`,
        };
      else
        return {
          error: `Invalid parameter [${err.param}] in [${err.location}]`,
          message: err.msg,
        };
    });
  }
}
