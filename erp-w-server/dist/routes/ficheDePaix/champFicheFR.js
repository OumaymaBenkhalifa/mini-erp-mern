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
exports.champFRRouter = void 0;
const express = require('express');
const router = express.Router();
exports.champFRRouter = router;
const champFicheFR_model_1 = require("../../models/champFicheFR.model");
const validateSchema_1 = require("../../schemas/validateSchema");
const { checkSchema } = require('express-validator');
const champFicheController = __importStar(require("../../controllers/champFiche.controller"));
const CheckSchema = checkSchema;
router.get('/', champFicheController.getAllChampsFR);
router.post('/add/:id', (0, validateSchema_1.validate)(CheckSchema(champFicheFR_model_1.ChampFicheFRS)), champFicheController.addChampFR);
router.put('/update/:id', champFicheController.updateChampFR);
router.delete('/delete/:id', champFicheController.deleteChampFR);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbXBGaWNoZUZSLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsicm91dGVzL2ZpY2hlRGVQYWl4L2NoYW1wRmljaGVGUi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNuQyxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFxQmIsK0JBQWE7QUFwQmhDLHdFQUFnRTtBQUNoRSxpRUFBd0Q7QUFDeEQsTUFBTSxFQUFFLFdBQVcsRUFBRSxHQUFHLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBQ3JELDhGQUFnRjtBQUNoRixNQUFNLFdBQVcsR0FBRyxXQUFXLENBQUM7QUFFaEMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsb0JBQW9CLENBQUMsY0FBYyxDQUFDLENBQUM7QUFHckQsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBQSx5QkFBUSxFQUFDLFdBQVcsQ0FBQyxrQ0FBYSxDQUFDLENBQUMsRUFBRSxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUcvRixNQUFNLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxvQkFBb0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUc5RCxNQUFNLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxvQkFBb0IsQ0FBQyxhQUFhLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJyk7XG5jb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuaW1wb3J0IHsgQ2hhbXBGaWNoZUZSUyB9IGZyb20gJy4uLy4uL21vZGVscy9jaGFtcEZpY2hlRlIubW9kZWwnO1xuaW1wb3J0IHsgdmFsaWRhdGUgfSBmcm9tICcuLi8uLi9zY2hlbWFzL3ZhbGlkYXRlU2NoZW1hJztcbmNvbnN0IHsgY2hlY2tTY2hlbWEgfSA9IHJlcXVpcmUoJ2V4cHJlc3MtdmFsaWRhdG9yJyk7XG5pbXBvcnQgKiBhcyBjaGFtcEZpY2hlQ29udHJvbGxlciBmcm9tICcuLi8uLi9jb250cm9sbGVycy9jaGFtcEZpY2hlLmNvbnRyb2xsZXInO1xuY29uc3QgQ2hlY2tTY2hlbWEgPSBjaGVja1NjaGVtYTtcbi8qIEdFVCBmaWNoZXMgbGlzdGluZy4gKi9cbnJvdXRlci5nZXQoJy8nLCBjaGFtcEZpY2hlQ29udHJvbGxlci5nZXRBbGxDaGFtcHNGUik7XG5cbi8qIEFERCBuZXcgZmljaGUgKi9cbnJvdXRlci5wb3N0KCcvYWRkLzppZCcsIHZhbGlkYXRlKENoZWNrU2NoZW1hKENoYW1wRmljaGVGUlMpKSwgY2hhbXBGaWNoZUNvbnRyb2xsZXIuYWRkQ2hhbXBGUik7XG5cbi8qIFVQREFURSBmaWNoZSBpbmZvcyAqL1xucm91dGVyLnB1dCgnL3VwZGF0ZS86aWQnLCBjaGFtcEZpY2hlQ29udHJvbGxlci51cGRhdGVDaGFtcEZSKTtcblxuLyogREVMRVRFIGZpY2hlICovXG5yb3V0ZXIuZGVsZXRlKCcvZGVsZXRlLzppZCcsIGNoYW1wRmljaGVDb250cm9sbGVyLmRlbGV0ZUNoYW1wRlIpO1xuXG4vKiBHRVQgZmljaGUgb3duZXIgKi9cbi8vcm91dGVyLmdldCgnLzppZCcsIGNoYW1wRmljaGVDb250cm9sbGVyLmdldEVtcGxveWUpO1xuXG5leHBvcnQgeyByb3V0ZXIgYXMgY2hhbXBGUlJvdXRlciB9O1xuIl19