// Externals
import { Request, Response, NextFunction } from 'express';
import { Result, ValidationChain, ValidationError, validationResult } from 'express-validator';
// Custom Errors
import { BadRequestError } from '../errors/bad-request-error';
// Schemas

const validateRequest = (schema: ValidationChain[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    await Promise.all(schema.map((chain) => chain.run(req)));
    const errors: Result<ValidationError> = validationResult(req);
    if (!errors.isEmpty()) {
      return next(new BadRequestError(errors.array()));
    }
    return next();
  };
};

export { validateRequest };
