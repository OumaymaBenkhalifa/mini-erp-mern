import { CustomError } from './custom-error';

export class EntityNotFoundError extends CustomError {
  statusCode = 404;

  constructor(public message: string) {
    super();
    Object.setPrototypeOf(this, EntityNotFoundError.prototype);
  }

  serializeErrors() {
    return {
      message: this.message,
    };
  }
}
