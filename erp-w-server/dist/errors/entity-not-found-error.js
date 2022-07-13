"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityNotFoundError = void 0;
const custom_error_1 = require("./custom-error");
class EntityNotFoundError extends custom_error_1.CustomError {
    constructor(message) {
        super();
        this.message = message;
        this.statusCode = 404;
        Object.setPrototypeOf(this, EntityNotFoundError.prototype);
    }
    serializeErrors() {
        return {
            message: this.message,
        };
    }
}
exports.EntityNotFoundError = EntityNotFoundError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LW5vdC1mb3VuZC1lcnJvci5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImVycm9ycy9lbnRpdHktbm90LWZvdW5kLWVycm9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGlEQUE2QztBQUU3QyxNQUFhLG1CQUFvQixTQUFRLDBCQUFXO0lBR2xELFlBQW1CLE9BQWU7UUFDaEMsS0FBSyxFQUFFLENBQUM7UUFEUyxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBRmxDLGVBQVUsR0FBRyxHQUFHLENBQUM7UUFJZixNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsZUFBZTtRQUNiLE9BQU87WUFDTCxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87U0FDdEIsQ0FBQztJQUNKLENBQUM7Q0FDRjtBQWJELGtEQWFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ3VzdG9tRXJyb3IgfSBmcm9tICcuL2N1c3RvbS1lcnJvcic7XG5cbmV4cG9ydCBjbGFzcyBFbnRpdHlOb3RGb3VuZEVycm9yIGV4dGVuZHMgQ3VzdG9tRXJyb3Ige1xuICBzdGF0dXNDb2RlID0gNDA0O1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICBzdXBlcigpO1xuICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBFbnRpdHlOb3RGb3VuZEVycm9yLnByb3RvdHlwZSk7XG4gIH1cblxuICBzZXJpYWxpemVFcnJvcnMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1lc3NhZ2U6IHRoaXMubWVzc2FnZSxcbiAgICB9O1xuICB9XG59XG4iXX0=