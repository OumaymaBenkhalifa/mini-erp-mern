"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadRequestError = void 0;
const custom_error_1 = require("./custom-error");
class BadRequestError extends custom_error_1.CustomError {
    constructor(errors) {
        super();
        this.errors = errors;
        this.statusCode = 400;
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
exports.BadRequestError = BadRequestError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkLXJlcXVlc3QtZXJyb3IuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJlcnJvcnMvYmFkLXJlcXVlc3QtZXJyb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsaURBQTZDO0FBRzdDLE1BQWEsZUFBZ0IsU0FBUSwwQkFBVztJQUc5QyxZQUFtQixNQUF5QjtRQUMxQyxLQUFLLEVBQUUsQ0FBQztRQURTLFdBQU0sR0FBTixNQUFNLENBQW1CO1FBRjVDLGVBQVUsR0FBRyxHQUFHLENBQUM7UUFJZixNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVELGVBQWU7UUFDYixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDN0IsSUFBSSxPQUFPLEdBQUcsQ0FBQyxLQUFLLEtBQUssV0FBVztnQkFDbEMsT0FBTztvQkFDTCxLQUFLLEVBQUUsc0JBQXNCLEdBQUcsQ0FBQyxLQUFLLFNBQVMsR0FBRyxDQUFDLFFBQVEsR0FBRztpQkFDL0QsQ0FBQzs7Z0JBRUYsT0FBTztvQkFDTCxLQUFLLEVBQUUsc0JBQXNCLEdBQUcsQ0FBQyxLQUFLLFNBQVMsR0FBRyxDQUFDLFFBQVEsR0FBRztvQkFDOUQsT0FBTyxFQUFFLEdBQUcsQ0FBQyxHQUFHO2lCQUNqQixDQUFDO1FBQ04sQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0Y7QUFyQkQsMENBcUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ3VzdG9tRXJyb3IgfSBmcm9tICcuL2N1c3RvbS1lcnJvcic7XG5pbXBvcnQgeyBWYWxpZGF0aW9uRXJyb3IgfSBmcm9tICdleHByZXNzLXZhbGlkYXRvcic7XG5cbmV4cG9ydCBjbGFzcyBCYWRSZXF1ZXN0RXJyb3IgZXh0ZW5kcyBDdXN0b21FcnJvciB7XG4gIHN0YXR1c0NvZGUgPSA0MDA7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVycm9yczogVmFsaWRhdGlvbkVycm9yW10pIHtcbiAgICBzdXBlcigpO1xuICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBCYWRSZXF1ZXN0RXJyb3IucHJvdG90eXBlKTtcbiAgfVxuXG4gIHNlcmlhbGl6ZUVycm9ycygpIHtcbiAgICByZXR1cm4gdGhpcy5lcnJvcnMubWFwKChlcnIpID0+IHtcbiAgICAgIGlmICh0eXBlb2YgZXJyLnZhbHVlID09PSAndW5kZWZpbmVkJylcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBlcnJvcjogYE1pc3NpbmcgcGFyYW1ldGVyIFske2Vyci5wYXJhbX1dIGluIFske2Vyci5sb2NhdGlvbn1dYCxcbiAgICAgICAgfTtcbiAgICAgIGVsc2VcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBlcnJvcjogYEludmFsaWQgcGFyYW1ldGVyIFske2Vyci5wYXJhbX1dIGluIFske2Vyci5sb2NhdGlvbn1dYCxcbiAgICAgICAgICBtZXNzYWdlOiBlcnIubXNnLFxuICAgICAgICB9O1xuICAgIH0pO1xuICB9XG59XG4iXX0=