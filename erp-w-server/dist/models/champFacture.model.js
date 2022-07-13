"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Champ = exports.champSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const champSchema = new mongoose_1.default.Schema({
    description: {
        type: String,
        required: true,
    },
    coutUnitaire: {
        type: Number,
        required: true,
        isNumeric: true,
        errorMessage: 'please enter a number',
    },
    facture: {
        ref: 'Facture',
        type: mongoose_1.default.Schema.Types.ObjectId,
    },
    quantite: {
        type: Number,
        required: true,
        isInt: true,
        errorMessage: 'please enter an integer',
    },
    montant: {
        type: Number,
        required: true,
        isNumeric: true,
        errorMessage: 'please enter a number',
    },
});
exports.champSchema = champSchema;
champSchema.statics.build = (attrs) => {
    return new Champ(attrs);
};
const Champ = mongoose_1.default.model('Champ', champSchema);
exports.Champ = Champ;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbXBGYWN0dXJlLm1vZGVsLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsibW9kZWxzL2NoYW1wRmFjdHVyZS5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSx3REFBZ0M7QUFhaEMsTUFBTSxXQUFXLEdBQUcsSUFBSSxrQkFBUSxDQUFDLE1BQU0sQ0FBUztJQUM5QyxXQUFXLEVBQUU7UUFDWCxJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxJQUFJO0tBQ2Y7SUFDRCxZQUFZLEVBQUU7UUFDWixJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxJQUFJO1FBQ2QsU0FBUyxFQUFFLElBQUk7UUFDZixZQUFZLEVBQUUsdUJBQXVCO0tBQ3RDO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsR0FBRyxFQUFFLFNBQVM7UUFDZCxJQUFJLEVBQUUsa0JBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVE7S0FDckM7SUFDRCxRQUFRLEVBQUU7UUFDUixJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxJQUFJO1FBQ2QsS0FBSyxFQUFFLElBQUk7UUFDWCxZQUFZLEVBQUUseUJBQXlCO0tBQ3hDO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsSUFBSTtRQUNkLFNBQVMsRUFBRSxJQUFJO1FBQ2YsWUFBWSxFQUFFLHVCQUF1QjtLQUN0QztDQUNGLENBQUMsQ0FBQztBQU9NLGtDQUFXO0FBTHBCLFdBQVcsQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBYSxFQUFFLEVBQUU7SUFDNUMsT0FBTyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMxQixDQUFDLENBQUM7QUFFRixNQUFNLEtBQUssR0FBRyxrQkFBUSxDQUFDLEtBQUssQ0FBc0IsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0FBQ2xELHNCQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcbmltcG9ydCB7IEZhY3R1cmUsIElGYWN0dXJlIH0gZnJvbSAnLi4vbW9kZWxzL2ZhY3R1cmUubW9kZWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElDaGFtcCBleHRlbmRzIERvY3VtZW50IHtcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgY291dFVuaXRhaXJlOiBudW1iZXI7XG4gIGZhY3R1cmU6IElGYWN0dXJlO1xuICBxdWFudGl0ZTogbnVtYmVyO1xuICBtb250YW50OiBudW1iZXI7XG59XG5pbnRlcmZhY2UgSUNoYW1wTW9kZWwgZXh0ZW5kcyBtb25nb29zZS5Nb2RlbDxJQ2hhbXA+IHtcbiAgYnVpbGQoYXR0cnM6IElDaGFtcCk6IElDaGFtcDtcbn1cbmNvbnN0IGNoYW1wU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYTxJQ2hhbXA+KHtcbiAgZGVzY3JpcHRpb246IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gIH0sXG4gIGNvdXRVbml0YWlyZToge1xuICAgIHR5cGU6IE51bWJlcixcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICBpc051bWVyaWM6IHRydWUsXG4gICAgZXJyb3JNZXNzYWdlOiAncGxlYXNlIGVudGVyIGEgbnVtYmVyJyxcbiAgfSxcbiAgZmFjdHVyZToge1xuICAgIHJlZjogJ0ZhY3R1cmUnLFxuICAgIHR5cGU6IG1vbmdvb3NlLlNjaGVtYS5UeXBlcy5PYmplY3RJZCxcbiAgfSxcbiAgcXVhbnRpdGU6IHtcbiAgICB0eXBlOiBOdW1iZXIsXG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgaXNJbnQ6IHRydWUsXG4gICAgZXJyb3JNZXNzYWdlOiAncGxlYXNlIGVudGVyIGFuIGludGVnZXInLFxuICB9LFxuICBtb250YW50OiB7XG4gICAgdHlwZTogTnVtYmVyLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIGlzTnVtZXJpYzogdHJ1ZSxcbiAgICBlcnJvck1lc3NhZ2U6ICdwbGVhc2UgZW50ZXIgYSBudW1iZXInLFxuICB9LFxufSk7XG5cbmNoYW1wU2NoZW1hLnN0YXRpY3MuYnVpbGQgPSAoYXR0cnM6IElDaGFtcCkgPT4ge1xuICByZXR1cm4gbmV3IENoYW1wKGF0dHJzKTtcbn07XG5cbmNvbnN0IENoYW1wID0gbW9uZ29vc2UubW9kZWw8SUNoYW1wLCBJQ2hhbXBNb2RlbD4oJ0NoYW1wJywgY2hhbXBTY2hlbWEpO1xuZXhwb3J0IHsgY2hhbXBTY2hlbWEsIENoYW1wIH07XG4iXX0=