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
exports.factureRouter = void 0;
const express = require('express');
const router = express.Router();
exports.factureRouter = router;
const { checkSchema } = require('express-validator');
const validateSchema_1 = require("../../schemas/validateSchema");
const facture_model_1 = require("../../models/facture.model");
const factureController = __importStar(require("../../controllers/facture.controller"));
const checkRole_1 = require("../../middlewares/checkRole");
const passport_1 = __importDefault(require("passport"));
const CheckSchema = checkSchema;
router.get('/', passport_1.default.authenticate('jwt', { session: false }), (0, checkRole_1.authPage)(['admin', 'superAdmin']), factureController.getAllfactures);
router.post('/add', passport_1.default.authenticate('jwt', { session: false }), (0, checkRole_1.authPage)(['admin', 'superAdmin']), (0, validateSchema_1.validate)(CheckSchema(facture_model_1.factureSchema)), factureController.addfacture);
router.put('/update/:id', passport_1.default.authenticate('jwt', { session: false }), (0, checkRole_1.authPage)(['admin', 'superAdmin']), factureController.updatefacture);
router.delete('/delete/:id', passport_1.default.authenticate('jwt', { session: false }), (0, checkRole_1.authPage)(['admin', 'superAdmin']), factureController.deletefacture);
router.get('/:id', passport_1.default.authenticate('jwt', { session: false }), (0, checkRole_1.authPage)(['admin', 'superAdmin']), factureController.getClient);
router.get('/list/:email', passport_1.default.authenticate('jwt', { session: false }), (0, checkRole_1.authPage)(['client', 'admin', 'superAdmin']), factureController.getFactureByClient);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjdHVyZS5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbInJvdXRlcy9mYWN0dXJlL2ZhY3R1cmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDbkMsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBeUJiLCtCQUFhO0FBeEJoQyxNQUFNLEVBQUUsV0FBVyxFQUFFLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDckQsaUVBQXdEO0FBQ3hELDhEQUEyRDtBQUMzRCx3RkFBMEU7QUFDMUUsMkRBQXVEO0FBQ3ZELHdEQUFnQztBQUVoQyxNQUFNLFdBQVcsR0FBRyxXQUFXLENBQUM7QUFFaEMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUMsa0JBQVEsQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUMsSUFBQSxvQkFBUSxFQUFDLENBQUMsT0FBTyxFQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsaUJBQWlCLENBQUMsY0FBYyxDQUFDLENBQUM7QUFHcEksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUMsa0JBQVEsQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUMsSUFBQSxvQkFBUSxFQUFDLENBQUMsT0FBTyxFQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsSUFBQSx5QkFBUSxFQUFDLFdBQVcsQ0FBQyw2QkFBYSxDQUFDLENBQUMsRUFBRSxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUcxSyxNQUFNLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBQyxrQkFBUSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBQyxJQUFBLG9CQUFRLEVBQUMsQ0FBQyxPQUFPLEVBQUMsWUFBWSxDQUFDLENBQUMsRUFBRyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUc5SSxNQUFNLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxrQkFBUSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBQyxJQUFBLG9CQUFRLEVBQUMsQ0FBQyxPQUFPLEVBQUMsWUFBWSxDQUFDLENBQUMsRUFBRyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUdsSixNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBQyxrQkFBUSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBQyxJQUFBLG9CQUFRLEVBQUMsQ0FBQyxPQUFPLEVBQUMsWUFBWSxDQUFDLENBQUMsRUFBRyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUVuSSxNQUFNLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBQyxrQkFBUSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBQyxJQUFBLG9CQUFRLEVBQUMsQ0FBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLFlBQVksQ0FBQyxDQUFDLEVBQUcsaUJBQWlCLENBQUMsa0JBQWtCLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJyk7XG5jb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuY29uc3QgeyBjaGVja1NjaGVtYSB9ID0gcmVxdWlyZSgnZXhwcmVzcy12YWxpZGF0b3InKTtcbmltcG9ydCB7IHZhbGlkYXRlIH0gZnJvbSAnLi4vLi4vc2NoZW1hcy92YWxpZGF0ZVNjaGVtYSc7XG5pbXBvcnQgeyBmYWN0dXJlU2NoZW1hIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2ZhY3R1cmUubW9kZWwnO1xuaW1wb3J0ICogYXMgZmFjdHVyZUNvbnRyb2xsZXIgZnJvbSAnLi4vLi4vY29udHJvbGxlcnMvZmFjdHVyZS5jb250cm9sbGVyJztcbmltcG9ydCB7IGF1dGhQYWdlIH0gZnJvbSAnLi4vLi4vbWlkZGxld2FyZXMvY2hlY2tSb2xlJztcbmltcG9ydCBwYXNzcG9ydCBmcm9tICdwYXNzcG9ydCc7XG5cbmNvbnN0IENoZWNrU2NoZW1hID0gY2hlY2tTY2hlbWE7XG4vKiBHRVQgZmFjdHVyZXMgbGlzdGluZy4gKi9cbnJvdXRlci5nZXQoJy8nLHBhc3Nwb3J0LmF1dGhlbnRpY2F0ZSgnand0JywgeyBzZXNzaW9uOiBmYWxzZSB9KSxhdXRoUGFnZShbJ2FkbWluJywnc3VwZXJBZG1pbiddKSwgZmFjdHVyZUNvbnRyb2xsZXIuZ2V0QWxsZmFjdHVyZXMpO1xuXG4vKiBBREQgbmV3IGZhY3R1cmUgKi9cbnJvdXRlci5wb3N0KCcvYWRkJyxwYXNzcG9ydC5hdXRoZW50aWNhdGUoJ2p3dCcsIHsgc2Vzc2lvbjogZmFsc2UgfSksYXV0aFBhZ2UoWydhZG1pbicsJ3N1cGVyQWRtaW4nXSksIHZhbGlkYXRlKENoZWNrU2NoZW1hKGZhY3R1cmVTY2hlbWEpKSwgZmFjdHVyZUNvbnRyb2xsZXIuYWRkZmFjdHVyZSk7XG5cbi8qIFVQREFURSBmYWN0dXJlIGluZm9zICovXG5yb3V0ZXIucHV0KCcvdXBkYXRlLzppZCcscGFzc3BvcnQuYXV0aGVudGljYXRlKCdqd3QnLCB7IHNlc3Npb246IGZhbHNlIH0pLGF1dGhQYWdlKFsnYWRtaW4nLCdzdXBlckFkbWluJ10pLCAgZmFjdHVyZUNvbnRyb2xsZXIudXBkYXRlZmFjdHVyZSk7XG5cbi8qIERFTEVURSBmYWN0dXJlICovXG5yb3V0ZXIuZGVsZXRlKCcvZGVsZXRlLzppZCcsIHBhc3Nwb3J0LmF1dGhlbnRpY2F0ZSgnand0JywgeyBzZXNzaW9uOiBmYWxzZSB9KSxhdXRoUGFnZShbJ2FkbWluJywnc3VwZXJBZG1pbiddKSwgIGZhY3R1cmVDb250cm9sbGVyLmRlbGV0ZWZhY3R1cmUpO1xuXG4vKiBHRVQgZmFjdHVyZSBvd25lciAqL1xucm91dGVyLmdldCgnLzppZCcscGFzc3BvcnQuYXV0aGVudGljYXRlKCdqd3QnLCB7IHNlc3Npb246IGZhbHNlIH0pLGF1dGhQYWdlKFsnYWRtaW4nLCdzdXBlckFkbWluJ10pLCAgZmFjdHVyZUNvbnRyb2xsZXIuZ2V0Q2xpZW50KTtcblxucm91dGVyLmdldCgnL2xpc3QvOmVtYWlsJyxwYXNzcG9ydC5hdXRoZW50aWNhdGUoJ2p3dCcsIHsgc2Vzc2lvbjogZmFsc2UgfSksYXV0aFBhZ2UoWydjbGllbnQnLCAnYWRtaW4nLCAnc3VwZXJBZG1pbiddKSwgIGZhY3R1cmVDb250cm9sbGVyLmdldEZhY3R1cmVCeUNsaWVudCk7IFxuZXhwb3J0IHsgcm91dGVyIGFzIGZhY3R1cmVSb3V0ZXIgfTtcbiJdfQ==