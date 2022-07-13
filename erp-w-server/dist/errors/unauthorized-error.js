"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnauthorizedError = void 0;
const custom_error_1 = require("./custom-error");
class UnauthorizedError extends custom_error_1.CustomError {
    constructor(message) {
        super();
        this.message = message;
        this.statusCode = 401;
        Object.setPrototypeOf(this, UnauthorizedError.prototype);
    }
    serializeErrors() {
        return {
            message: this.message,
        };
    }
}
exports.UnauthorizedError = UnauthorizedError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5hdXRob3JpemVkLWVycm9yLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZXJyb3JzL3VuYXV0aG9yaXplZC1lcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxpREFBNkM7QUFFN0MsTUFBYSxpQkFBa0IsU0FBUSwwQkFBVztJQUdoRCxZQUFtQixPQUFlO1FBQ2hDLEtBQUssRUFBRSxDQUFDO1FBRFMsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUZsQyxlQUFVLEdBQUcsR0FBRyxDQUFDO1FBSWYsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsaUJBQWlCLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVELGVBQWU7UUFDYixPQUFPO1lBQ0wsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1NBQ3RCLENBQUM7SUFDSixDQUFDO0NBQ0Y7QUFiRCw4Q0FhQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE1vZHVsZXNcbmltcG9ydCB7IEN1c3RvbUVycm9yIH0gZnJvbSAnLi9jdXN0b20tZXJyb3InO1xuXG5leHBvcnQgY2xhc3MgVW5hdXRob3JpemVkRXJyb3IgZXh0ZW5kcyBDdXN0b21FcnJvciB7XG4gIHN0YXR1c0NvZGUgPSA0MDE7XG5cbiAgY29uc3RydWN0b3IocHVibGljIG1lc3NhZ2U6IHN0cmluZykge1xuICAgIHN1cGVyKCk7XG4gICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIFVuYXV0aG9yaXplZEVycm9yLnByb3RvdHlwZSk7XG4gIH1cblxuICBzZXJpYWxpemVFcnJvcnMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1lc3NhZ2U6IHRoaXMubWVzc2FnZSxcbiAgICB9O1xuICB9XG59XG4iXX0=