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
exports.ficheFRRouter = void 0;
const express = require('express');
const router = express.Router();
exports.ficheFRRouter = router;
const { checkSchema } = require('express-validator');
const validateSchema_1 = require("../../schemas/validateSchema");
const fichePaix_model_1 = require("../../models/fichePaix.model");
const ficheController = __importStar(require("../../controllers/ficheDePaix.controller"));
const CheckSchema = checkSchema;
router.get('/', ficheController.getAllfichesFR);
router.post('/add', (0, validateSchema_1.validate)(CheckSchema(fichePaix_model_1.ficheS)), ficheController.addFicheFR);
router.put('/update/:id', ficheController.updateFicheFR);
router.delete('/delete/:id', ficheController.deleteficheFR);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbXBGaWNoZS5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbInJvdXRlcy9maWNoZURlUGFpeC9jaGFtcEZpY2hlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ25DLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQXFCYiwrQkFBYTtBQXBCaEMsTUFBTSxFQUFFLFdBQVcsRUFBRSxHQUFHLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBQ3JELGlFQUF3RDtBQUN4RCxrRUFBc0Q7QUFDdEQsMEZBQTRFO0FBQzVFLE1BQU0sV0FBVyxHQUFHLFdBQVcsQ0FBQztBQUVoQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxlQUFlLENBQUMsY0FBYyxDQUFDLENBQUM7QUFHaEQsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBQSx5QkFBUSxFQUFDLFdBQVcsQ0FBQyx3QkFBTSxDQUFDLENBQUMsRUFBRSxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUM7QUFHL0UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsZUFBZSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBR3pELE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLGVBQWUsQ0FBQyxhQUFhLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJyk7XHJcbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XHJcbmNvbnN0IHsgY2hlY2tTY2hlbWEgfSA9IHJlcXVpcmUoJ2V4cHJlc3MtdmFsaWRhdG9yJyk7XHJcbmltcG9ydCB7IHZhbGlkYXRlIH0gZnJvbSAnLi4vLi4vc2NoZW1hcy92YWxpZGF0ZVNjaGVtYSc7XHJcbmltcG9ydCB7IGZpY2hlUyB9IGZyb20gJy4uLy4uL21vZGVscy9maWNoZVBhaXgubW9kZWwnO1xyXG5pbXBvcnQgKiBhcyBmaWNoZUNvbnRyb2xsZXIgZnJvbSAnLi4vLi4vY29udHJvbGxlcnMvZmljaGVEZVBhaXguY29udHJvbGxlcic7XHJcbmNvbnN0IENoZWNrU2NoZW1hID0gY2hlY2tTY2hlbWE7XHJcbi8qIEdFVCBmaWNoZXMgbGlzdGluZy4gKi9cclxucm91dGVyLmdldCgnLycsIGZpY2hlQ29udHJvbGxlci5nZXRBbGxmaWNoZXNGUik7XHJcblxyXG4vKiBBREQgbmV3IGZpY2hlICovXHJcbnJvdXRlci5wb3N0KCcvYWRkJywgdmFsaWRhdGUoQ2hlY2tTY2hlbWEoZmljaGVTKSksIGZpY2hlQ29udHJvbGxlci5hZGRGaWNoZUZSKTtcclxuXHJcbi8qIFVQREFURSBmaWNoZSBpbmZvcyAqL1xyXG5yb3V0ZXIucHV0KCcvdXBkYXRlLzppZCcsIGZpY2hlQ29udHJvbGxlci51cGRhdGVGaWNoZUZSKTtcclxuXHJcbi8qIERFTEVURSBmaWNoZSAqL1xyXG5yb3V0ZXIuZGVsZXRlKCcvZGVsZXRlLzppZCcsIGZpY2hlQ29udHJvbGxlci5kZWxldGVmaWNoZUZSKTtcclxuXHJcbi8qIEdFVCBmaWNoZSBvd25lciAqL1xyXG4vL3JvdXRlci5nZXQoJy86aWQnLCBmaWNoZUNvbnRyb2xsZXIuZ2V0RW1wbG95ZSk7XHJcblxyXG5leHBvcnQgeyByb3V0ZXIgYXMgZmljaGVGUlJvdXRlciB9O1xyXG4iXX0=