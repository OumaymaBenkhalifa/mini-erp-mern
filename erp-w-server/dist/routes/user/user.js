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
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const { checkSchema } = require('express-validator');
const validateSchema_1 = require("../../schemas/validateSchema");
const user_model_1 = require("../../models/user.model");
const userController = __importStar(require("../../controllers/user.controller"));
const checkRole_1 = require("../../middlewares/checkRole");
const passport_1 = __importDefault(require("passport"));
const router = express_1.default.Router();
exports.userRouter = router;
router.get('/list', userController.getAllUsers);
router.get('/:email', userController.getUserByEmail);
router.post('/add', passport_1.default.authenticate('jwt', { session: false }), (0, checkRole_1.authPage)(['admin', 'superAdmin']), (0, validateSchema_1.validate)(checkSchema(user_model_1.UserSchema)), userController.addUser);
router.put('/update/:email', passport_1.default.authenticate('jwt', { session: false }), (0, checkRole_1.authPage)(['admin', 'superAdmin']), userController.updateUser);
router.delete('/delete/:email', passport_1.default.authenticate('jwt', { session: false }), (0, checkRole_1.authPage)(['admin', 'superAdmin']), userController.deleteUser);
router.get('/factures/:_id', userController.getAllFactures);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbInJvdXRlcy91c2VyL3VzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzREFBOEI7QUFDOUIsTUFBTSxFQUFFLFdBQVcsRUFBRSxHQUFHLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBQ3JELGlFQUF3RDtBQUN4RCx3REFBcUQ7QUFDckQsa0ZBQW9FO0FBQ3BFLDJEQUF1RDtBQUN2RCx3REFBZ0M7QUFDaEMsTUFBTSxNQUFNLEdBQUcsaUJBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQW9CYiw0QkFBVTtBQWpCN0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBR2hELE1BQU0sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUdyRCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxrQkFBUSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBQyxJQUFBLG9CQUFRLEVBQUMsQ0FBQyxPQUFPLEVBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxJQUFBLHlCQUFRLEVBQUMsV0FBVyxDQUFDLHVCQUFVLENBQUMsQ0FBQyxFQUFFLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUdsSyxNQUFNLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFDLGtCQUFRLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFDLElBQUEsb0JBQVEsRUFBQyxDQUFDLE9BQU8sRUFBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUcxSSxNQUFNLENBQUMsTUFBTSxDQUFDLGdCQUFnQixFQUFFLGtCQUFRLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFDLElBQUEsb0JBQVEsRUFBQyxDQUFDLE9BQU8sRUFBQyxZQUFZLENBQUMsQ0FBQyxFQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUc3SSxNQUFNLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFeHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuY29uc3QgeyBjaGVja1NjaGVtYSB9ID0gcmVxdWlyZSgnZXhwcmVzcy12YWxpZGF0b3InKTtcbmltcG9ydCB7IHZhbGlkYXRlIH0gZnJvbSAnLi4vLi4vc2NoZW1hcy92YWxpZGF0ZVNjaGVtYSc7XG5pbXBvcnQgeyBVc2VyU2NoZW1hIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3VzZXIubW9kZWwnO1xuaW1wb3J0ICogYXMgdXNlckNvbnRyb2xsZXIgZnJvbSAnLi4vLi4vY29udHJvbGxlcnMvdXNlci5jb250cm9sbGVyJztcbmltcG9ydCB7IGF1dGhQYWdlIH0gZnJvbSAnLi4vLi4vbWlkZGxld2FyZXMvY2hlY2tSb2xlJztcbmltcG9ydCBwYXNzcG9ydCBmcm9tICdwYXNzcG9ydCc7XG5jb25zdCByb3V0ZXIgPSBFeHByZXNzLlJvdXRlcigpO1xuXG4vKiBHRVQgdXNlcnMgbGlzdGluZy4gKi9cbnJvdXRlci5nZXQoJy9saXN0JywgdXNlckNvbnRyb2xsZXIuZ2V0QWxsVXNlcnMpO1xuXG4vKiBHRVQgdXNlciBieSBlbWFpbCAqL1xucm91dGVyLmdldCgnLzplbWFpbCcsIHVzZXJDb250cm9sbGVyLmdldFVzZXJCeUVtYWlsKTtcblxuLyogQUREIG5ldyB1c2VyICovXG5yb3V0ZXIucG9zdCgnL2FkZCcsIHBhc3Nwb3J0LmF1dGhlbnRpY2F0ZSgnand0JywgeyBzZXNzaW9uOiBmYWxzZSB9KSxhdXRoUGFnZShbJ2FkbWluJywnc3VwZXJBZG1pbiddKSwgdmFsaWRhdGUoY2hlY2tTY2hlbWEoVXNlclNjaGVtYSkpLCB1c2VyQ29udHJvbGxlci5hZGRVc2VyKTtcblxuLyogVVBEQVRFIHVzZXIgaW5mb3MgKi9cbnJvdXRlci5wdXQoJy91cGRhdGUvOmVtYWlsJyxwYXNzcG9ydC5hdXRoZW50aWNhdGUoJ2p3dCcsIHsgc2Vzc2lvbjogZmFsc2UgfSksYXV0aFBhZ2UoWydhZG1pbicsJ3N1cGVyQWRtaW4nXSksIHVzZXJDb250cm9sbGVyLnVwZGF0ZVVzZXIpO1xuXG4vKiBERUxFVEUgdXNlciAqL1xucm91dGVyLmRlbGV0ZSgnL2RlbGV0ZS86ZW1haWwnLCBwYXNzcG9ydC5hdXRoZW50aWNhdGUoJ2p3dCcsIHsgc2Vzc2lvbjogZmFsc2UgfSksYXV0aFBhZ2UoWydhZG1pbicsJ3N1cGVyQWRtaW4nXSksdXNlckNvbnRyb2xsZXIuZGVsZXRlVXNlcik7XG5cbi8qIEdFVCBhbGwgZmFjdHVyZXMgZm9yIHVzZXIgKi9cbnJvdXRlci5nZXQoJy9mYWN0dXJlcy86X2lkJywgdXNlckNvbnRyb2xsZXIuZ2V0QWxsRmFjdHVyZXMpO1xuXG5leHBvcnQgeyByb3V0ZXIgYXMgdXNlclJvdXRlciB9O1xuIl19