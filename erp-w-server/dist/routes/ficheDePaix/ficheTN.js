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
exports.ficheTNRouter = void 0;
const express = require('express');
const router = express.Router();
exports.ficheTNRouter = router;
const { checkSchema } = require('express-validator');
const validateSchema_1 = require("../../schemas/validateSchema");
const fichePaix_model_1 = require("../../models/fichePaix.model");
const ficheController = __importStar(require("../../controllers/ficheDePaix.controller"));
const CheckSchema = checkSchema;
const checkRole_1 = require("../../middlewares/checkRole");
const passport_1 = __importDefault(require("passport"));
router.get('/', passport_1.default.authenticate('jwt', { session: false }), (0, checkRole_1.authPage)(['admin', 'superAdmin']), ficheController.getAllfichesTN);
router.post('/add', passport_1.default.authenticate('jwt', { session: false }), (0, checkRole_1.authPage)(['admin', 'superAdmin']), (0, validateSchema_1.validate)(CheckSchema(fichePaix_model_1.ficheS)), ficheController.addFicheTN);
router.put('/update/:id', passport_1.default.authenticate('jwt', { session: false }), (0, checkRole_1.authPage)(['admin', 'superAdmin']), ficheController.updateFicheTN);
router.delete('/delete/:id', passport_1.default.authenticate('jwt', { session: false }), (0, checkRole_1.authPage)(['admin', 'superAdmin']), ficheController.deleteficheTN);
router.get('/list/:email', passport_1.default.authenticate('jwt', { session: false }), (0, checkRole_1.authPage)(['employee', 'admin', 'superAdmin']), ficheController.getFicheTNByEmployee);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmljaGVUTi5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbInJvdXRlcy9maWNoZURlUGFpeC9maWNoZVROLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ25DLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQXlCYiwrQkFBYTtBQXhCaEMsTUFBTSxFQUFFLFdBQVcsRUFBRSxHQUFHLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBQ3JELGlFQUF3RDtBQUN4RCxrRUFBc0Q7QUFDdEQsMEZBQTRFO0FBQzVFLE1BQU0sV0FBVyxHQUFHLFdBQVcsQ0FBQztBQUNoQywyREFBdUQ7QUFDdkQsd0RBQWdDO0FBRWhDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFHLGtCQUFRLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFDLElBQUEsb0JBQVEsRUFBQyxDQUFDLE9BQU8sRUFBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLGVBQWUsQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUdwSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRyxrQkFBUSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBQyxJQUFBLG9CQUFRLEVBQUMsQ0FBQyxPQUFPLEVBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxJQUFBLHlCQUFRLEVBQUMsV0FBVyxDQUFDLHdCQUFNLENBQUMsQ0FBQyxFQUFFLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUduSyxNQUFNLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxrQkFBUSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBQyxJQUFBLG9CQUFRLEVBQUMsQ0FBQyxPQUFPLEVBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxlQUFlLENBQUMsYUFBYSxDQUFDLENBQUM7QUFHNUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsa0JBQVEsQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUMsSUFBQSxvQkFBUSxFQUFDLENBQUMsT0FBTyxFQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsZUFBZSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBSS9JLE1BQU0sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFDLGtCQUFRLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFDLElBQUEsb0JBQVEsRUFBQyxDQUFDLFVBQVUsRUFBRSxPQUFPLEVBQUUsWUFBWSxDQUFDLENBQUMsRUFBRyxlQUFlLENBQUMsb0JBQW9CLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJyk7XG5jb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuY29uc3QgeyBjaGVja1NjaGVtYSB9ID0gcmVxdWlyZSgnZXhwcmVzcy12YWxpZGF0b3InKTtcbmltcG9ydCB7IHZhbGlkYXRlIH0gZnJvbSAnLi4vLi4vc2NoZW1hcy92YWxpZGF0ZVNjaGVtYSc7XG5pbXBvcnQgeyBmaWNoZVMgfSBmcm9tICcuLi8uLi9tb2RlbHMvZmljaGVQYWl4Lm1vZGVsJztcbmltcG9ydCAqIGFzIGZpY2hlQ29udHJvbGxlciBmcm9tICcuLi8uLi9jb250cm9sbGVycy9maWNoZURlUGFpeC5jb250cm9sbGVyJztcbmNvbnN0IENoZWNrU2NoZW1hID0gY2hlY2tTY2hlbWE7XG5pbXBvcnQgeyBhdXRoUGFnZSB9IGZyb20gJy4uLy4uL21pZGRsZXdhcmVzL2NoZWNrUm9sZSc7XG5pbXBvcnQgcGFzc3BvcnQgZnJvbSAncGFzc3BvcnQnO1xuLyogR0VUIGZhY3R1cmVzIGxpc3RpbmcuICovXG5yb3V0ZXIuZ2V0KCcvJywgIHBhc3Nwb3J0LmF1dGhlbnRpY2F0ZSgnand0JywgeyBzZXNzaW9uOiBmYWxzZSB9KSxhdXRoUGFnZShbJ2FkbWluJywnc3VwZXJBZG1pbiddKSwgZmljaGVDb250cm9sbGVyLmdldEFsbGZpY2hlc1ROKTtcblxuLyogQUREIG5ldyBmaWNoZSAqL1xucm91dGVyLnBvc3QoJy9hZGQnLCAgcGFzc3BvcnQuYXV0aGVudGljYXRlKCdqd3QnLCB7IHNlc3Npb246IGZhbHNlIH0pLGF1dGhQYWdlKFsnYWRtaW4nLCdzdXBlckFkbWluJ10pLCB2YWxpZGF0ZShDaGVja1NjaGVtYShmaWNoZVMpKSwgZmljaGVDb250cm9sbGVyLmFkZEZpY2hlVE4pO1xuXG4vKiBVUERBVEUgZmljaGUgaW5mb3MgKi9cbnJvdXRlci5wdXQoJy91cGRhdGUvOmlkJywgcGFzc3BvcnQuYXV0aGVudGljYXRlKCdqd3QnLCB7IHNlc3Npb246IGZhbHNlIH0pLGF1dGhQYWdlKFsnYWRtaW4nLCdzdXBlckFkbWluJ10pLCBmaWNoZUNvbnRyb2xsZXIudXBkYXRlRmljaGVUTik7XG5cbi8qIERFTEVURSBmaWNoZSAqL1xucm91dGVyLmRlbGV0ZSgnL2RlbGV0ZS86aWQnLCBwYXNzcG9ydC5hdXRoZW50aWNhdGUoJ2p3dCcsIHsgc2Vzc2lvbjogZmFsc2UgfSksYXV0aFBhZ2UoWydhZG1pbicsJ3N1cGVyQWRtaW4nXSksIGZpY2hlQ29udHJvbGxlci5kZWxldGVmaWNoZVROKTtcblxuLyogR0VUIGZpY2hlIG93bmVyICovXG4vL3JvdXRlci5nZXQoJy86aWQnLCBmaWNoZUNvbnRyb2xsZXIuZ2V0RW1wbG95ZSk7XG5yb3V0ZXIuZ2V0KCcvbGlzdC86ZW1haWwnLHBhc3Nwb3J0LmF1dGhlbnRpY2F0ZSgnand0JywgeyBzZXNzaW9uOiBmYWxzZSB9KSxhdXRoUGFnZShbJ2VtcGxveWVlJywgJ2FkbWluJywgJ3N1cGVyQWRtaW4nXSksICBmaWNoZUNvbnRyb2xsZXIuZ2V0RmljaGVUTkJ5RW1wbG95ZWUpOyBcblxuXG5leHBvcnQgeyByb3V0ZXIgYXMgZmljaGVUTlJvdXRlciB9O1xuIl19