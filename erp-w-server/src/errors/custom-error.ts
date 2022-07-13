export abstract class CustomError extends Error {
  abstract statusCode: number;

  constructor() {
    super();
    Object.setPrototypeOf(this, CustomError.prototype);
  }

  abstract serializeErrors():
    | {
        error?: string;
        message?: string;
      }[]
    | {
        error?: string;
        message?: string;
      };
}
