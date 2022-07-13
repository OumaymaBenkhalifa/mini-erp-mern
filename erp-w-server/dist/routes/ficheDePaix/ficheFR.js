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
exports.ficheFRRouter = void 0;
const express = require('express');
const router = express.Router();
exports.ficheFRRouter = router;
const { checkSchema } = require('express-validator');
const validateSchema_1 = require("../../schemas/validateSchema");
const fichePaix_model_1 = require("../../models/fichePaix.model");
const ficheController = __importStar(require("../../controllers/ficheDePaix.controller"));
const checkRole_1 = require("../../middlewares/checkRole");
const passport_1 = __importDefault(require("passport"));
const CheckSchema = checkSchema;
router.get('/', passport_1.default.authenticate('jwt', { session: false }), (0, checkRole_1.authPage)(['admin', 'superAdmin']), ficheController.getAllfichesFR);
router.post('/add', passport_1.default.authenticate('jwt', { session: false }), (0, checkRole_1.authPage)(['admin', 'superAdmin']), (0, validateSchema_1.validate)(CheckSchema(fichePaix_model_1.ficheS)), ficheController.addFicheFR);
router.put('/update/:id', passport_1.default.authenticate('jwt', { session: false }), (0, checkRole_1.authPage)(['admin', 'superAdmin']), ficheController.updateFicheFR);
router.delete('/delete/:id', passport_1.default.authenticate('jwt', { session: false }), (0, checkRole_1.authPage)(['admin', 'superAdmin']), ficheController.deleteficheFR);
router.get('/list/:email', passport_1.default.authenticate('jwt', { session: false }), (0, checkRole_1.authPage)(['employee', 'admin', 'superAdmin']), ficheController.getFicheFRByEmployee);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmljaGVGUi5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbInJvdXRlcy9maWNoZURlUGFpeC9maWNoZUZSLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ25DLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQTBCYiwrQkFBYTtBQXpCaEMsTUFBTSxFQUFFLFdBQVcsRUFBRSxHQUFHLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBQ3JELGlFQUF3RDtBQUN4RCxrRUFBc0Q7QUFDdEQsMEZBQTRFO0FBQzVFLDJEQUF1RDtBQUN2RCx3REFBZ0M7QUFDaEMsTUFBTSxXQUFXLEdBQUcsV0FBVyxDQUFDO0FBRWhDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLGtCQUFRLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFDLElBQUEsb0JBQVEsRUFBQyxDQUFDLE9BQU8sRUFBQyxZQUFZLENBQUMsQ0FBQyxFQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUdsSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRyxrQkFBUSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBQyxJQUFBLG9CQUFRLEVBQUMsQ0FBQyxPQUFPLEVBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxJQUFBLHlCQUFRLEVBQUMsV0FBVyxDQUFDLHdCQUFNLENBQUMsQ0FBQyxFQUFFLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUduSyxNQUFNLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxrQkFBUSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBQyxJQUFBLG9CQUFRLEVBQUMsQ0FBQyxPQUFPLEVBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxlQUFlLENBQUMsYUFBYSxDQUFDLENBQUM7QUFHNUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsa0JBQVEsQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUMsSUFBQSxvQkFBUSxFQUFDLENBQUMsT0FBTyxFQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsZUFBZSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBSy9JLE1BQU0sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFDLGtCQUFRLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFDLElBQUEsb0JBQVEsRUFBQyxDQUFDLFVBQVUsRUFBRSxPQUFPLEVBQUUsWUFBWSxDQUFDLENBQUMsRUFBRyxlQUFlLENBQUMsb0JBQW9CLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJyk7XG5jb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuY29uc3QgeyBjaGVja1NjaGVtYSB9ID0gcmVxdWlyZSgnZXhwcmVzcy12YWxpZGF0b3InKTtcbmltcG9ydCB7IHZhbGlkYXRlIH0gZnJvbSAnLi4vLi4vc2NoZW1hcy92YWxpZGF0ZVNjaGVtYSc7XG5pbXBvcnQgeyBmaWNoZVMgfSBmcm9tICcuLi8uLi9tb2RlbHMvZmljaGVQYWl4Lm1vZGVsJztcbmltcG9ydCAqIGFzIGZpY2hlQ29udHJvbGxlciBmcm9tICcuLi8uLi9jb250cm9sbGVycy9maWNoZURlUGFpeC5jb250cm9sbGVyJztcbmltcG9ydCB7IGF1dGhQYWdlIH0gZnJvbSAnLi4vLi4vbWlkZGxld2FyZXMvY2hlY2tSb2xlJztcbmltcG9ydCBwYXNzcG9ydCBmcm9tICdwYXNzcG9ydCc7XG5jb25zdCBDaGVja1NjaGVtYSA9IGNoZWNrU2NoZW1hO1xuLyogR0VUIGZpY2hlcyBsaXN0aW5nLiAqL1xucm91dGVyLmdldCgnLycsIHBhc3Nwb3J0LmF1dGhlbnRpY2F0ZSgnand0JywgeyBzZXNzaW9uOiBmYWxzZSB9KSxhdXRoUGFnZShbJ2FkbWluJywnc3VwZXJBZG1pbiddKSxmaWNoZUNvbnRyb2xsZXIuZ2V0QWxsZmljaGVzRlIpO1xuXG4vKiBBREQgbmV3IGZpY2hlICovXG5yb3V0ZXIucG9zdCgnL2FkZCcsICBwYXNzcG9ydC5hdXRoZW50aWNhdGUoJ2p3dCcsIHsgc2Vzc2lvbjogZmFsc2UgfSksYXV0aFBhZ2UoWydhZG1pbicsJ3N1cGVyQWRtaW4nXSksIHZhbGlkYXRlKENoZWNrU2NoZW1hKGZpY2hlUykpLCBmaWNoZUNvbnRyb2xsZXIuYWRkRmljaGVGUik7XG5cbi8qIFVQREFURSBmaWNoZSBpbmZvcyAqL1xucm91dGVyLnB1dCgnL3VwZGF0ZS86aWQnLCBwYXNzcG9ydC5hdXRoZW50aWNhdGUoJ2p3dCcsIHsgc2Vzc2lvbjogZmFsc2UgfSksYXV0aFBhZ2UoWydhZG1pbicsJ3N1cGVyQWRtaW4nXSksIGZpY2hlQ29udHJvbGxlci51cGRhdGVGaWNoZUZSKTtcblxuLyogREVMRVRFIGZpY2hlICovXG5yb3V0ZXIuZGVsZXRlKCcvZGVsZXRlLzppZCcsIHBhc3Nwb3J0LmF1dGhlbnRpY2F0ZSgnand0JywgeyBzZXNzaW9uOiBmYWxzZSB9KSxhdXRoUGFnZShbJ2FkbWluJywnc3VwZXJBZG1pbiddKSwgZmljaGVDb250cm9sbGVyLmRlbGV0ZWZpY2hlRlIpO1xuXG4vKiBHRVQgZmljaGUgb3duZXIgKi9cbi8vcm91dGVyLmdldCgnLzppZCcsIGZpY2hlQ29udHJvbGxlci5nZXRFbXBsb3llKTtcblxucm91dGVyLmdldCgnL2xpc3QvOmVtYWlsJyxwYXNzcG9ydC5hdXRoZW50aWNhdGUoJ2p3dCcsIHsgc2Vzc2lvbjogZmFsc2UgfSksYXV0aFBhZ2UoWydlbXBsb3llZScsICdhZG1pbicsICdzdXBlckFkbWluJ10pLCAgZmljaGVDb250cm9sbGVyLmdldEZpY2hlRlJCeUVtcGxveWVlKTsgXG5cblxuZXhwb3J0IHsgcm91dGVyIGFzIGZpY2hlRlJSb3V0ZXIgfTtcbiJdfQ==