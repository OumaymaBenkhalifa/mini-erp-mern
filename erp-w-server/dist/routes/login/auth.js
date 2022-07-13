"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = __importDefault(require("express"));
const { checkSchema } = require('express-validator');
const validateSchema_1 = require("../../schemas/validateSchema");
const user_model_1 = require("../../models/user.model");
const authController = __importStar(require("../../controllers/auth.controller"));
const router = express_1.default.Router();
exports.authRouter = router;
router.post('/register', (0, validateSchema_1.validate)(checkSchema(user_model_1.UserSchema)), authController.register);
router.post('/login', (0, validateSchema_1.validate)(checkSchema(user_model_1.UserSchema)), authController.login);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbInJvdXRlcy9sb2dpbi9hdXRoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0RBQThCO0FBQzlCLE1BQU0sRUFBRSxXQUFXLEVBQUUsR0FBRyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUNyRCxpRUFBd0Q7QUFDeEQsd0RBQXFEO0FBQ3JELGtGQUFvRTtBQUNwRSxNQUFNLE1BQU0sR0FBRyxpQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBS2IsNEJBQVU7QUFIN0IsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBQSx5QkFBUSxFQUFDLFdBQVcsQ0FBQyx1QkFBVSxDQUFDLENBQUMsRUFBRSxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDckYsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBQSx5QkFBUSxFQUFDLFdBQVcsQ0FBQyx1QkFBVSxDQUFDLENBQUMsRUFBRSxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmNvbnN0IHsgY2hlY2tTY2hlbWEgfSA9IHJlcXVpcmUoJ2V4cHJlc3MtdmFsaWRhdG9yJyk7XG5pbXBvcnQgeyB2YWxpZGF0ZSB9IGZyb20gJy4uLy4uL3NjaGVtYXMvdmFsaWRhdGVTY2hlbWEnO1xuaW1wb3J0IHsgVXNlclNjaGVtYSB9IGZyb20gJy4uLy4uL21vZGVscy91c2VyLm1vZGVsJztcbmltcG9ydCAqIGFzIGF1dGhDb250cm9sbGVyIGZyb20gJy4uLy4uL2NvbnRyb2xsZXJzL2F1dGguY29udHJvbGxlcic7XG5jb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuXG5yb3V0ZXIucG9zdCgnL3JlZ2lzdGVyJywgdmFsaWRhdGUoY2hlY2tTY2hlbWEoVXNlclNjaGVtYSkpLCBhdXRoQ29udHJvbGxlci5yZWdpc3Rlcik7XG5yb3V0ZXIucG9zdCgnL2xvZ2luJywgdmFsaWRhdGUoY2hlY2tTY2hlbWEoVXNlclNjaGVtYSkpLCBhdXRoQ29udHJvbGxlci5sb2dpbik7XG5cbmV4cG9ydCB7IHJvdXRlciBhcyBhdXRoUm91dGVyIH07XG4iXX0=