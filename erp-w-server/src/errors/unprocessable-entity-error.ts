import { CustomError } from './custom-error';

export class UnprocessableEntityError extends CustomError {
  statusCode = 422;

  constructor(public message: string) {
    super();
    Object.setPrototypeOf(this, UnprocessableEntityError.prototype);
  }

  serializeErrors() {
    return [
      {
        error: 'Unprocessable Entity',
        message: this.message,
      },
    ];
  }
}
