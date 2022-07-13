"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnprocessableEntityError = void 0;
const custom_error_1 = require("./custom-error");
class UnprocessableEntityError extends custom_error_1.CustomError {
    constructor(message) {
        super();
        this.message = message;
        this.statusCode = 422;
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
exports.UnprocessableEntityError = UnprocessableEntityError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5wcm9jZXNzYWJsZS1lbnRpdHktZXJyb3IuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJlcnJvcnMvdW5wcm9jZXNzYWJsZS1lbnRpdHktZXJyb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsaURBQTZDO0FBRTdDLE1BQWEsd0JBQXlCLFNBQVEsMEJBQVc7SUFHdkQsWUFBbUIsT0FBZTtRQUNoQyxLQUFLLEVBQUUsQ0FBQztRQURTLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFGbEMsZUFBVSxHQUFHLEdBQUcsQ0FBQztRQUlmLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLHdCQUF3QixDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFRCxlQUFlO1FBQ2IsT0FBTztZQUNMO2dCQUNFLEtBQUssRUFBRSxzQkFBc0I7Z0JBQzdCLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTzthQUN0QjtTQUNGLENBQUM7SUFDSixDQUFDO0NBQ0Y7QUFoQkQsNERBZ0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ3VzdG9tRXJyb3IgfSBmcm9tICcuL2N1c3RvbS1lcnJvcic7XG5cbmV4cG9ydCBjbGFzcyBVbnByb2Nlc3NhYmxlRW50aXR5RXJyb3IgZXh0ZW5kcyBDdXN0b21FcnJvciB7XG4gIHN0YXR1c0NvZGUgPSA0MjI7XG5cbiAgY29uc3RydWN0b3IocHVibGljIG1lc3NhZ2U6IHN0cmluZykge1xuICAgIHN1cGVyKCk7XG4gICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIFVucHJvY2Vzc2FibGVFbnRpdHlFcnJvci5wcm90b3R5cGUpO1xuICB9XG5cbiAgc2VyaWFsaXplRXJyb3JzKCkge1xuICAgIHJldHVybiBbXG4gICAgICB7XG4gICAgICAgIGVycm9yOiAnVW5wcm9jZXNzYWJsZSBFbnRpdHknLFxuICAgICAgICBtZXNzYWdlOiB0aGlzLm1lc3NhZ2UsXG4gICAgICB9LFxuICAgIF07XG4gIH1cbn1cbiJdfQ==