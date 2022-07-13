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
exports.ChampFicheFRSchema = exports.ChampFicheFRS = exports.ChampFicheFR = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const ChampFicheFRS = {
    libelle: {
        type: String,
        required: true,
    },
    baseSalariale: {
        type: Number,
        required: true,
        isNumeric: true,
        errorMessage: 'please enter a number',
    },
    taux: {
        type: Number,
        required: true,
        isNumeric: true,
        errorMessage: 'please enter a number',
    },
    resultatSalarial: {
        type: Number,
    },
    basePatronale: {
        type: Number,
        isNumeric: true,
        errorMessage: 'please enter a number',
    },
    tauxPatronal: {
        type: Number,
        isNumeric: true,
        errorMessage: 'please enter a number',
    },
    resultatPatronal: {
        type: Number,
    },
    Fiche: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'FicheFR',
    },
};
exports.ChampFicheFRS = ChampFicheFRS;
const ChampFicheFRSchema = new mongoose_1.Schema(ChampFicheFRS);
exports.ChampFicheFRSchema = ChampFicheFRSchema;
ChampFicheFRSchema.statics.build = (attrs) => {
    return new ChampFicheFR(attrs);
};
const ChampFicheFR = mongoose_1.default.model('ChampFicheFR', ChampFicheFRSchema);
exports.ChampFicheFR = ChampFicheFR;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbXBGaWNoZUZSLm1vZGVsLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsibW9kZWxzL2NoYW1wRmljaGVGUi5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFEQUE0QztBQWlCNUMsTUFBTSxhQUFhLEdBQUc7SUFDcEIsT0FBTyxFQUFFO1FBQ1AsSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsSUFBSTtLQUNmO0lBQ0QsYUFBYSxFQUFFO1FBQ2IsSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsSUFBSTtRQUNkLFNBQVMsRUFBRSxJQUFJO1FBQ2YsWUFBWSxFQUFFLHVCQUF1QjtLQUN0QztJQUNELElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLElBQUk7UUFDZCxTQUFTLEVBQUUsSUFBSTtRQUNmLFlBQVksRUFBRSx1QkFBdUI7S0FDdEM7SUFDRCxnQkFBZ0IsRUFBRTtRQUNoQixJQUFJLEVBQUUsTUFBTTtLQUNiO0lBQ0QsYUFBYSxFQUFFO1FBQ2IsSUFBSSxFQUFFLE1BQU07UUFDWixTQUFTLEVBQUUsSUFBSTtRQUNmLFlBQVksRUFBRSx1QkFBdUI7S0FDdEM7SUFDRCxZQUFZLEVBQUU7UUFDWixJQUFJLEVBQUUsTUFBTTtRQUNaLFNBQVMsRUFBRSxJQUFJO1FBQ2YsWUFBWSxFQUFFLHVCQUF1QjtLQUN0QztJQUNELGdCQUFnQixFQUFFO1FBQ2hCLElBQUksRUFBRSxNQUFNO0tBQ2I7SUFDRCxLQUFLLEVBQUU7UUFDTCxJQUFJLEVBQUUsa0JBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVE7UUFDcEMsR0FBRyxFQUFFLFNBQVM7S0FDZjtDQUNGLENBQUM7QUFPcUIsc0NBQWE7QUFOcEMsTUFBTSxrQkFBa0IsR0FBRyxJQUFJLGlCQUFNLENBQWdCLGFBQWEsQ0FBQyxDQUFDO0FBTTlCLGdEQUFrQjtBQUp4RCxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBb0IsRUFBRSxFQUFFO0lBQzFELE9BQU8sSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDakMsQ0FBQyxDQUFDO0FBQ0YsTUFBTSxZQUFZLEdBQUcsa0JBQVEsQ0FBQyxLQUFLLENBQW9DLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0FBQ2xHLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlLCB7IFNjaGVtYSB9IGZyb20gJ21vbmdvb3NlJztcbmltcG9ydCB7IElGaWNoZUZSIH0gZnJvbSAnLi9maWNoZVBhaXgubW9kZWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElDaGFtcEZpY2hlRlIgZXh0ZW5kcyBEb2N1bWVudCB7XG4gIGxpYmVsbGU6IHN0cmluZztcbiAgYmFzZVNhbGFyaWFsZT86IG51bWJlcjtcbiAgdGF1eD86IG51bWJlcjtcbiAgcmVzdWx0YXRTYWxhcmlhbD86IG51bWJlcjtcbiAgYmFzZVBhdHJvbmFsZT86IG51bWJlcjtcbiAgdGF1eFBhdHJvbmFsPzogbnVtYmVyO1xuICByZXN1bHRhdFBhdHJvbmFsPzogbnVtYmVyO1xuICBGaWNoZTogSUZpY2hlRlI7XG59XG5pbnRlcmZhY2UgSUNoYW1wRmljaGVGUk1vZGVsIGV4dGVuZHMgbW9uZ29vc2UuTW9kZWw8SUNoYW1wRmljaGVGUj4ge1xuICBidWlsZChhdHRyczogSUNoYW1wRmljaGVGUik6IElDaGFtcEZpY2hlRlI7XG59XG5cbmNvbnN0IENoYW1wRmljaGVGUlMgPSB7XG4gIGxpYmVsbGU6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gIH0sXG4gIGJhc2VTYWxhcmlhbGU6IHtcbiAgICB0eXBlOiBOdW1iZXIsXG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgaXNOdW1lcmljOiB0cnVlLFxuICAgIGVycm9yTWVzc2FnZTogJ3BsZWFzZSBlbnRlciBhIG51bWJlcicsXG4gIH0sXG4gIHRhdXg6IHtcbiAgICB0eXBlOiBOdW1iZXIsXG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgaXNOdW1lcmljOiB0cnVlLFxuICAgIGVycm9yTWVzc2FnZTogJ3BsZWFzZSBlbnRlciBhIG51bWJlcicsXG4gIH0sXG4gIHJlc3VsdGF0U2FsYXJpYWw6IHtcbiAgICB0eXBlOiBOdW1iZXIsXG4gIH0sXG4gIGJhc2VQYXRyb25hbGU6IHtcbiAgICB0eXBlOiBOdW1iZXIsXG4gICAgaXNOdW1lcmljOiB0cnVlLFxuICAgIGVycm9yTWVzc2FnZTogJ3BsZWFzZSBlbnRlciBhIG51bWJlcicsXG4gIH0sXG4gIHRhdXhQYXRyb25hbDoge1xuICAgIHR5cGU6IE51bWJlcixcbiAgICBpc051bWVyaWM6IHRydWUsXG4gICAgZXJyb3JNZXNzYWdlOiAncGxlYXNlIGVudGVyIGEgbnVtYmVyJyxcbiAgfSxcbiAgcmVzdWx0YXRQYXRyb25hbDoge1xuICAgIHR5cGU6IE51bWJlcixcbiAgfSxcbiAgRmljaGU6IHtcbiAgICB0eXBlOiBtb25nb29zZS5TY2hlbWEuVHlwZXMuT2JqZWN0SWQsXG4gICAgcmVmOiAnRmljaGVGUicsXG4gIH0sXG59O1xuY29uc3QgQ2hhbXBGaWNoZUZSU2NoZW1hID0gbmV3IFNjaGVtYTxJQ2hhbXBGaWNoZUZSPihDaGFtcEZpY2hlRlJTKTtcblxuQ2hhbXBGaWNoZUZSU2NoZW1hLnN0YXRpY3MuYnVpbGQgPSAoYXR0cnM6IElDaGFtcEZpY2hlRlIpID0+IHtcbiAgcmV0dXJuIG5ldyBDaGFtcEZpY2hlRlIoYXR0cnMpO1xufTtcbmNvbnN0IENoYW1wRmljaGVGUiA9IG1vbmdvb3NlLm1vZGVsPElDaGFtcEZpY2hlRlIsIElDaGFtcEZpY2hlRlJNb2RlbD4oJ0NoYW1wRmljaGVGUicsIENoYW1wRmljaGVGUlNjaGVtYSk7XG5leHBvcnQgeyBDaGFtcEZpY2hlRlIsIENoYW1wRmljaGVGUlMsIENoYW1wRmljaGVGUlNjaGVtYSB9O1xuIl19