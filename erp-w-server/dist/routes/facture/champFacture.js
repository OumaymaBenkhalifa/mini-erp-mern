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
Object.defineProperty(exports, "__esModule", { value: true });
exports.champRouter = void 0;
const express = require('express');
const router = express.Router();
exports.champRouter = router;
const { checkSchema } = require('express-validator');
const validateSchema_1 = require("../../schemas/validateSchema");
const champFacture_model_1 = require("../../models/champFacture.model");
const champFactureController = __importStar(require("../../controllers/champFacture.controller"));
const CheckSchema = checkSchema;
router.get('/list', champFactureController.getAllChamps);
router.post('/add/:id', (0, validateSchema_1.validate)(CheckSchema(champFacture_model_1.champSchema)), champFactureController.addChamp);
router.put('/update/:id', champFactureController.updateChamp);
router.delete('/delete/:id', champFactureController.deleteChamp);
router.get('/:id', champFactureController.getFacture);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbXBGYWN0dXJlLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsicm91dGVzL2ZhY3R1cmUvY2hhbXBGYWN0dXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ25DLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQXFCYiw2QkFBVztBQXBCOUIsTUFBTSxFQUFFLFdBQVcsRUFBRSxHQUFHLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBQ3JELGlFQUF3RDtBQUN4RCx3RUFBOEQ7QUFDOUQsa0dBQW9GO0FBQ3BGLE1BQU0sV0FBVyxHQUFHLFdBQVcsQ0FBQztBQUVoQyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxzQkFBc0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUd6RCxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFBLHlCQUFRLEVBQUMsV0FBVyxDQUFDLGdDQUFXLENBQUMsQ0FBQyxFQUFFLHNCQUFzQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBRzdGLE1BQU0sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLHNCQUFzQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBRzlELE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLHNCQUFzQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBR2pFLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLHNCQUFzQixDQUFDLFVBQVUsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKTtcbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5jb25zdCB7IGNoZWNrU2NoZW1hIH0gPSByZXF1aXJlKCdleHByZXNzLXZhbGlkYXRvcicpO1xuaW1wb3J0IHsgdmFsaWRhdGUgfSBmcm9tICcuLi8uLi9zY2hlbWFzL3ZhbGlkYXRlU2NoZW1hJztcbmltcG9ydCB7IGNoYW1wU2NoZW1hIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NoYW1wRmFjdHVyZS5tb2RlbCc7XG5pbXBvcnQgKiBhcyBjaGFtcEZhY3R1cmVDb250cm9sbGVyIGZyb20gJy4uLy4uL2NvbnRyb2xsZXJzL2NoYW1wRmFjdHVyZS5jb250cm9sbGVyJztcbmNvbnN0IENoZWNrU2NoZW1hID0gY2hlY2tTY2hlbWE7XG4vKiBHRVQgY2hhbXAgbGlzdGluZy4gKi9cbnJvdXRlci5nZXQoJy9saXN0JywgY2hhbXBGYWN0dXJlQ29udHJvbGxlci5nZXRBbGxDaGFtcHMpO1xuXG4vKiBBREQgbmV3IGNoYW1wICovXG5yb3V0ZXIucG9zdCgnL2FkZC86aWQnLCB2YWxpZGF0ZShDaGVja1NjaGVtYShjaGFtcFNjaGVtYSkpLCBjaGFtcEZhY3R1cmVDb250cm9sbGVyLmFkZENoYW1wKTtcblxuLyogVVBEQVRFIGNoYW1wICovXG5yb3V0ZXIucHV0KCcvdXBkYXRlLzppZCcsIGNoYW1wRmFjdHVyZUNvbnRyb2xsZXIudXBkYXRlQ2hhbXApO1xuXG4vKiBERUxFVEUgY2hhbXAgKi9cbnJvdXRlci5kZWxldGUoJy9kZWxldGUvOmlkJywgY2hhbXBGYWN0dXJlQ29udHJvbGxlci5kZWxldGVDaGFtcCk7XG5cbi8qIEdFVCBmYWN0dXJlIG93bmVyKi9cbnJvdXRlci5nZXQoJy86aWQnLCBjaGFtcEZhY3R1cmVDb250cm9sbGVyLmdldEZhY3R1cmUpO1xuXG5leHBvcnQgeyByb3V0ZXIgYXMgY2hhbXBSb3V0ZXIgfTtcbiJdfQ==