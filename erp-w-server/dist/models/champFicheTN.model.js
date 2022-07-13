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
exports.ChampFicheTNSchema = exports.ChampFicheTNS = exports.ChampFicheTN = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const ChampFicheTNS = {
    libelle: {
        type: String,
        required: true,
    },
    nombre: {
        type: Number,
        isNumeric: true,
        errorMessage: 'please enter a number',
    },
    gains: {
        type: Number,
        isNumeric: true,
        errorMessage: 'please enter a number',
    },
    retenues: {
        type: Number,
        isNumeric: true,
        errorMessage: 'please enter a number',
    },
    Fiche: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'FicheTN',
    },
};
exports.ChampFicheTNS = ChampFicheTNS;
const ChampFicheTNSchema = new mongoose_1.Schema(ChampFicheTNS);
exports.ChampFicheTNSchema = ChampFicheTNSchema;
ChampFicheTNSchema.statics.build = (attrs) => {
    return new ChampFicheTN(attrs);
};
const ChampFicheTN = mongoose_1.default.model('ChampFicheTN', ChampFicheTNSchema);
exports.ChampFicheTN = ChampFicheTN;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbXBGaWNoZVROLm1vZGVsLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsibW9kZWxzL2NoYW1wRmljaGVUTi5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFEQUE0QztBQWM1QyxNQUFNLGFBQWEsR0FBRztJQUNwQixPQUFPLEVBQUU7UUFDUCxJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxJQUFJO0tBQ2Y7SUFDRCxNQUFNLEVBQUU7UUFDTixJQUFJLEVBQUUsTUFBTTtRQUNaLFNBQVMsRUFBRSxJQUFJO1FBQ2YsWUFBWSxFQUFFLHVCQUF1QjtLQUN0QztJQUNELEtBQUssRUFBRTtRQUNMLElBQUksRUFBRSxNQUFNO1FBQ1osU0FBUyxFQUFFLElBQUk7UUFDZixZQUFZLEVBQUUsdUJBQXVCO0tBQ3RDO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsSUFBSSxFQUFFLE1BQU07UUFDWixTQUFTLEVBQUUsSUFBSTtRQUNmLFlBQVksRUFBRSx1QkFBdUI7S0FDdEM7SUFDRCxLQUFLLEVBQUU7UUFDTCxJQUFJLEVBQUUsa0JBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVE7UUFDcEMsR0FBRyxFQUFFLFNBQVM7S0FDZjtDQUNGLENBQUM7QUFNcUIsc0NBQWE7QUFMcEMsTUFBTSxrQkFBa0IsR0FBRyxJQUFJLGlCQUFNLENBQWdCLGFBQWEsQ0FBQyxDQUFDO0FBSzlCLGdEQUFrQjtBQUp4RCxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBb0IsRUFBRSxFQUFFO0lBQzFELE9BQU8sSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDakMsQ0FBQyxDQUFDO0FBQ0YsTUFBTSxZQUFZLEdBQUcsa0JBQVEsQ0FBQyxLQUFLLENBQW9DLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0FBQ2xHLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlLCB7IFNjaGVtYSB9IGZyb20gJ21vbmdvb3NlJztcbmltcG9ydCB7IElGaWNoZVROIH0gZnJvbSAnLi9maWNoZVBhaXgubW9kZWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElDaGFtcEZpY2hlVE4gZXh0ZW5kcyBEb2N1bWVudCB7XG4gIGxpYmVsbGU6IHN0cmluZztcbiAgbm9tYnJlPzogbnVtYmVyO1xuICBnYWlucz86IG51bWJlcjtcbiAgcmV0ZW51ZXM/OiBudW1iZXI7XG4gIEZpY2hlOiBJRmljaGVUTjtcbn1cbmludGVyZmFjZSBJQ2hhbXBGaWNoZVROTW9kZWwgZXh0ZW5kcyBtb25nb29zZS5Nb2RlbDxJQ2hhbXBGaWNoZVROPiB7XG4gIGJ1aWxkKGF0dHJzOiBJQ2hhbXBGaWNoZVROKTogSUNoYW1wRmljaGVUTjtcbn1cblxuY29uc3QgQ2hhbXBGaWNoZVROUyA9IHtcbiAgbGliZWxsZToge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgfSxcbiAgbm9tYnJlOiB7XG4gICAgdHlwZTogTnVtYmVyLFxuICAgIGlzTnVtZXJpYzogdHJ1ZSxcbiAgICBlcnJvck1lc3NhZ2U6ICdwbGVhc2UgZW50ZXIgYSBudW1iZXInLFxuICB9LFxuICBnYWluczoge1xuICAgIHR5cGU6IE51bWJlcixcbiAgICBpc051bWVyaWM6IHRydWUsXG4gICAgZXJyb3JNZXNzYWdlOiAncGxlYXNlIGVudGVyIGEgbnVtYmVyJyxcbiAgfSxcbiAgcmV0ZW51ZXM6IHtcbiAgICB0eXBlOiBOdW1iZXIsXG4gICAgaXNOdW1lcmljOiB0cnVlLFxuICAgIGVycm9yTWVzc2FnZTogJ3BsZWFzZSBlbnRlciBhIG51bWJlcicsXG4gIH0sXG4gIEZpY2hlOiB7XG4gICAgdHlwZTogbW9uZ29vc2UuU2NoZW1hLlR5cGVzLk9iamVjdElkLFxuICAgIHJlZjogJ0ZpY2hlVE4nLFxuICB9LFxufTtcbmNvbnN0IENoYW1wRmljaGVUTlNjaGVtYSA9IG5ldyBTY2hlbWE8SUNoYW1wRmljaGVUTj4oQ2hhbXBGaWNoZVROUyk7XG5DaGFtcEZpY2hlVE5TY2hlbWEuc3RhdGljcy5idWlsZCA9IChhdHRyczogSUNoYW1wRmljaGVUTikgPT4ge1xuICByZXR1cm4gbmV3IENoYW1wRmljaGVUTihhdHRycyk7XG59O1xuY29uc3QgQ2hhbXBGaWNoZVROID0gbW9uZ29vc2UubW9kZWw8SUNoYW1wRmljaGVUTiwgSUNoYW1wRmljaGVUTk1vZGVsPignQ2hhbXBGaWNoZVROJywgQ2hhbXBGaWNoZVROU2NoZW1hKTtcbmV4cG9ydCB7IENoYW1wRmljaGVUTiwgQ2hhbXBGaWNoZVROUywgQ2hhbXBGaWNoZVROU2NoZW1hIH07XG4iXX0=