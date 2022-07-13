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
exports.Facture = exports.factureSchema = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const factureSchema = {
    date: {
        type: Date,
        isRequired: true,
        notEmpty: true,
        errorMessage: 'date field should not be empty',
        matches: {
            options: [/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/],
            errorMessage: 'Please enter a date form yyyy-mm-dd or yyyy-m-d',
        },
        isDate: { negated: false, errorMessage: 'invalid date' },
    },
    total: {
        type: Number,
        isRequired: true,
        isNumeric: true,
        errorMessage: 'please enter a number',
    },
    client: {
        ref: 'User',
        type: mongoose_1.default.Schema.Types.ObjectId,
    },
    echeance: {
        type: Date,
        isRequired: true,
        notEmpty: true,
        errorMessage: 'invalid date',
        matches: {
            options: [/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/],
            errorMessage: 'Please enter a date form yyyy-mm-dd or yyyy-m-d',
        },
        isDate: true,
    },
    champFacture: [
        {
            ref: 'Champ',
            type: mongoose_1.default.Schema.Types.ObjectId,
        },
    ],
};
exports.factureSchema = factureSchema;
const FactureSchema = new mongoose_1.Schema(factureSchema);
FactureSchema.statics.build = (attrs) => {
    return new Facture(attrs);
};
const Facture = mongoose_1.default.model('Facture', FactureSchema);
exports.Facture = Facture;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjdHVyZS5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbIm1vZGVscy9mYWN0dXJlLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscURBQTRDO0FBdUI1QyxNQUFNLGFBQWEsR0FBRztJQUNwQixJQUFJLEVBQUU7UUFDSixJQUFJLEVBQUUsSUFBSTtRQUNWLFVBQVUsRUFBRSxJQUFJO1FBQ2hCLFFBQVEsRUFBRSxJQUFJO1FBQ2QsWUFBWSxFQUFFLGdDQUFnQztRQUM5QyxPQUFPLEVBQUU7WUFFUCxPQUFPLEVBQUUsQ0FBQyxzREFBc0QsQ0FBQztZQUNqRSxZQUFZLEVBQUUsaURBQWlEO1NBQ2hFO1FBQ0QsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFO0tBQ3pEO0lBQ0QsS0FBSyxFQUFFO1FBQ0wsSUFBSSxFQUFFLE1BQU07UUFDWixVQUFVLEVBQUUsSUFBSTtRQUNoQixTQUFTLEVBQUUsSUFBSTtRQUNmLFlBQVksRUFBRSx1QkFBdUI7S0FDdEM7SUFDRCxNQUFNLEVBQUU7UUFDTixHQUFHLEVBQUUsTUFBTTtRQUNYLElBQUksRUFBRSxrQkFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUTtLQUNyQztJQUNELFFBQVEsRUFBRTtRQUNSLElBQUksRUFBRSxJQUFJO1FBQ1YsVUFBVSxFQUFFLElBQUk7UUFDaEIsUUFBUSxFQUFFLElBQUk7UUFDZCxZQUFZLEVBQUUsY0FBYztRQUM1QixPQUFPLEVBQUU7WUFFUCxPQUFPLEVBQUUsQ0FBQyxzREFBc0QsQ0FBQztZQUNqRSxZQUFZLEVBQUUsaURBQWlEO1NBQ2hFO1FBQ0QsTUFBTSxFQUFFLElBQUk7S0FDYjtJQUNELFlBQVksRUFBRTtRQUNaO1lBQ0UsR0FBRyxFQUFFLE9BQU87WUFDWixJQUFJLEVBQUUsa0JBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVE7U0FDckM7S0FDRjtDQUNGLENBQUM7QUFRTyxzQ0FBYTtBQU50QixNQUFNLGFBQWEsR0FBRyxJQUFJLGlCQUFNLENBQVcsYUFBYSxDQUFDLENBQUM7QUFDMUQsYUFBYSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFXLEVBQUUsRUFBRTtJQUM1QyxPQUFPLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzVCLENBQUMsQ0FBQztBQUVGLE1BQU0sT0FBTyxHQUFHLGtCQUFRLENBQUMsS0FBSyxDQUEwQixTQUFTLEVBQUUsYUFBYSxDQUFDLENBQUM7QUFDMUQsMEJBQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UsIHsgU2NoZW1hIH0gZnJvbSAnbW9uZ29vc2UnO1xuaW1wb3J0IHsgRG9jdW1lbnQgfSBmcm9tICdtb25nb29zZSc7XG5pbXBvcnQgeyBJVXNlciwgVXNlciB9IGZyb20gJy4uL21vZGVscy91c2VyLm1vZGVsJztcbmltcG9ydCB7IElDaGFtcCB9IGZyb20gJy4uL21vZGVscy9jaGFtcEZhY3R1cmUubW9kZWwnO1xuaW50ZXJmYWNlIElGYWMge1xuICBkYXRlOiBEYXRlO1xuICB0b3RhbDogbnVtYmVyO1xuICBlY2hlYW5jZTogRGF0ZTtcbiAgY2xpZW50OiBJVXNlcjtcbiAgY2hhbXBGYWN0dXJlOiBBcnJheTxJQ2hhbXA+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElGYWN0dXJlIGV4dGVuZHMgRG9jdW1lbnQge1xuICBkYXRlOiBEYXRlO1xuICB0b3RhbDogbnVtYmVyO1xuICBlY2hlYW5jZTogRGF0ZTtcbiAgY2xpZW50OiBJVXNlcjtcbiAgY2hhbXBGYWN0dXJlOiBBcnJheTxJQ2hhbXA+O1xufVxuZXhwb3J0IGludGVyZmFjZSBJRmFjdHVyZURvYyBleHRlbmRzIElGYWN0dXJlLCBEb2N1bWVudCB7fVxuaW50ZXJmYWNlIElGYWN0dXJlTW9kZWwgZXh0ZW5kcyBtb25nb29zZS5Nb2RlbDxJRmFjdHVyZT4ge1xuICBidWlsZChhdHRyczogSUZhYyk6IElGYWN0dXJlO1xufVxuY29uc3QgZmFjdHVyZVNjaGVtYSA9IHtcbiAgZGF0ZToge1xuICAgIHR5cGU6IERhdGUsXG4gICAgaXNSZXF1aXJlZDogdHJ1ZSxcbiAgICBub3RFbXB0eTogdHJ1ZSxcbiAgICBlcnJvck1lc3NhZ2U6ICdkYXRlIGZpZWxkIHNob3VsZCBub3QgYmUgZW1wdHknLFxuICAgIG1hdGNoZXM6IHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgb3B0aW9uczogWy9eXFxkezR9XFwtKDA/WzEtOV18MVswMTJdKVxcLSgwP1sxLTldfFsxMl1bMC05XXwzWzAxXSkkL10sXG4gICAgICBlcnJvck1lc3NhZ2U6ICdQbGVhc2UgZW50ZXIgYSBkYXRlIGZvcm0geXl5eS1tbS1kZCBvciB5eXl5LW0tZCcsXG4gICAgfSxcbiAgICBpc0RhdGU6IHsgbmVnYXRlZDogZmFsc2UsIGVycm9yTWVzc2FnZTogJ2ludmFsaWQgZGF0ZScgfSxcbiAgfSxcbiAgdG90YWw6IHtcbiAgICB0eXBlOiBOdW1iZXIsXG4gICAgaXNSZXF1aXJlZDogdHJ1ZSxcbiAgICBpc051bWVyaWM6IHRydWUsXG4gICAgZXJyb3JNZXNzYWdlOiAncGxlYXNlIGVudGVyIGEgbnVtYmVyJyxcbiAgfSxcbiAgY2xpZW50OiB7XG4gICAgcmVmOiAnVXNlcicsXG4gICAgdHlwZTogbW9uZ29vc2UuU2NoZW1hLlR5cGVzLk9iamVjdElkLFxuICB9LFxuICBlY2hlYW5jZToge1xuICAgIHR5cGU6IERhdGUsXG4gICAgaXNSZXF1aXJlZDogdHJ1ZSxcbiAgICBub3RFbXB0eTogdHJ1ZSxcbiAgICBlcnJvck1lc3NhZ2U6ICdpbnZhbGlkIGRhdGUnLFxuICAgIG1hdGNoZXM6IHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgb3B0aW9uczogWy9eXFxkezR9XFwtKDA/WzEtOV18MVswMTJdKVxcLSgwP1sxLTldfFsxMl1bMC05XXwzWzAxXSkkL10sXG4gICAgICBlcnJvck1lc3NhZ2U6ICdQbGVhc2UgZW50ZXIgYSBkYXRlIGZvcm0geXl5eS1tbS1kZCBvciB5eXl5LW0tZCcsXG4gICAgfSxcbiAgICBpc0RhdGU6IHRydWUsXG4gIH0sXG4gIGNoYW1wRmFjdHVyZTogW1xuICAgIHtcbiAgICAgIHJlZjogJ0NoYW1wJyxcbiAgICAgIHR5cGU6IG1vbmdvb3NlLlNjaGVtYS5UeXBlcy5PYmplY3RJZCxcbiAgICB9LFxuICBdLFxufTtcblxuY29uc3QgRmFjdHVyZVNjaGVtYSA9IG5ldyBTY2hlbWE8SUZhY3R1cmU+KGZhY3R1cmVTY2hlbWEpO1xuRmFjdHVyZVNjaGVtYS5zdGF0aWNzLmJ1aWxkID0gKGF0dHJzOiBJRmFjKSA9PiB7XG4gIHJldHVybiBuZXcgRmFjdHVyZShhdHRycyk7XG59O1xuXG5jb25zdCBGYWN0dXJlID0gbW9uZ29vc2UubW9kZWw8SUZhY3R1cmUsIElGYWN0dXJlTW9kZWw+KCdGYWN0dXJlJywgRmFjdHVyZVNjaGVtYSk7XG5leHBvcnQgeyBmYWN0dXJlU2NoZW1hLCBGYWN0dXJlIH07XG4iXX0=