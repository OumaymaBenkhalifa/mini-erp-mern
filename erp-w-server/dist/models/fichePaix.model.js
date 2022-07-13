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
exports.ficheS = exports.ficheFRSchema = exports.ficheTNSchema = exports.FicheFR = exports.FicheTN = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const ficheS = {
    dateDebut: {
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
    dateFin: {
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
    postOccupe: {
        type: String,
        isRequired: true,
        notEmpty: true,
        errorMessage: 'posteOccupe field should not be empty',
    },
    matricule: {
        type: String,
        isRequired: true,
        notEmpty: true,
        errorMessage: 'matricule field should not be empty',
    },
    numSecuriteSocial: {
        type: Number,
        isRequired: true,
        isInt: true,
        errorMessage: 'numero should be integer',
    },
    netPaye: {
        type: Number,
    },
    beneficiaire: {
        ref: 'User',
        type: mongoose_1.default.Schema.Types.ObjectId,
    },
};
exports.ficheS = ficheS;
const ficheSchema = new mongoose_1.Schema(ficheS);
const ficheTNSchema = new mongoose_1.Schema({
    ChampFiche: [
        {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: 'champFicheTN',
        },
    ],
});
exports.ficheTNSchema = ficheTNSchema;
ficheTNSchema.statics.build = (attrs) => {
    return new FicheTN(attrs);
};
const ficheFRSchema = new mongoose_1.Schema({
    ChampFiche: [
        {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: 'champFicheFR',
        },
    ],
});
exports.ficheFRSchema = ficheFRSchema;
const Fiche = mongoose_1.default.model('Fiche', ficheSchema);
const FicheTN = Fiche.discriminator('FicheTN', ficheTNSchema);
exports.FicheTN = FicheTN;
const FicheFR = Fiche.discriminator('FicheFR', ficheFRSchema);
exports.FicheFR = FicheFR;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmljaGVQYWl4Lm1vZGVsLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsibW9kZWxzL2ZpY2hlUGFpeC5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFEQUE0QztBQStCNUMsTUFBTSxNQUFNLEdBQUc7SUFDYixTQUFTLEVBQUU7UUFDVCxJQUFJLEVBQUUsSUFBSTtRQUNWLFVBQVUsRUFBRSxJQUFJO1FBQ2hCLFFBQVEsRUFBRSxJQUFJO1FBQ2QsWUFBWSxFQUFFLGdDQUFnQztRQUM5QyxPQUFPLEVBQUU7WUFFSCxPQUFPLEVBQUUsQ0FBQyxzREFBc0QsQ0FBQztZQUNyRSxZQUFZLEVBQUUsaURBQWlEO1NBQ2hFO1FBQ0QsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFO0tBQ3pEO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsSUFBSSxFQUFFLElBQUk7UUFDVixVQUFVLEVBQUUsSUFBSTtRQUNoQixRQUFRLEVBQUUsSUFBSTtRQUNkLFlBQVksRUFBRSxnQ0FBZ0M7UUFDOUMsT0FBTyxFQUFFO1lBRUgsT0FBTyxFQUFFLENBQUMsc0RBQXNELENBQUM7WUFDckUsWUFBWSxFQUFFLGlEQUFpRDtTQUNoRTtRQUNELE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRTtLQUN6RDtJQUNELFVBQVUsRUFBRTtRQUNWLElBQUksRUFBRSxNQUFNO1FBQ1osVUFBVSxFQUFFLElBQUk7UUFDaEIsUUFBUSxFQUFFLElBQUk7UUFDZCxZQUFZLEVBQUUsdUNBQXVDO0tBQ3REO0lBQ0QsU0FBUyxFQUFFO1FBQ1QsSUFBSSxFQUFFLE1BQU07UUFDWixVQUFVLEVBQUUsSUFBSTtRQUNoQixRQUFRLEVBQUUsSUFBSTtRQUNkLFlBQVksRUFBRSxxQ0FBcUM7S0FDcEQ7SUFDRCxpQkFBaUIsRUFBRTtRQUNqQixJQUFJLEVBQUUsTUFBTTtRQUNaLFVBQVUsRUFBRSxJQUFJO1FBQ2hCLEtBQUssRUFBRSxJQUFJO1FBQ1gsWUFBWSxFQUFFLDBCQUEwQjtLQUN6QztJQUNELE9BQU8sRUFBRTtRQUNQLElBQUksRUFBRSxNQUFNO0tBQ2I7SUFDRCxZQUFZLEVBQUU7UUFDWixHQUFHLEVBQUUsTUFBTTtRQUNYLElBQUksRUFBRSxrQkFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUTtLQUNyQztDQUNGLENBQUM7QUE2QnVELHdCQUFNO0FBNUIvRCxNQUFNLFdBQVcsR0FBRyxJQUFJLGlCQUFNLENBQVMsTUFBTSxDQUFDLENBQUM7QUFFL0MsTUFBTSxhQUFhLEdBQUcsSUFBSSxpQkFBTSxDQUFXO0lBQ3pDLFVBQVUsRUFBRTtRQUNWO1lBQ0UsSUFBSSxFQUFFLGtCQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRO1lBQ3BDLEdBQUcsRUFBRSxjQUFjO1NBQ3BCO0tBQ0Y7Q0FDRixDQUFDLENBQUM7QUFtQndCLHNDQUFhO0FBbEJ4QyxhQUFhLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQWUsRUFBRSxFQUFFO0lBQ2hELE9BQU8sSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDNUIsQ0FBQyxDQUFDO0FBQ0YsTUFBTSxhQUFhLEdBQUcsSUFBSSxpQkFBTSxDQUFXO0lBQ3pDLFVBQVUsRUFBRTtRQUNWO1lBQ0UsSUFBSSxFQUFFLGtCQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRO1lBQ3BDLEdBQUcsRUFBRSxjQUFjO1NBQ3BCO0tBQ0Y7Q0FDRixDQUFDLENBQUM7QUFRdUMsc0NBQWE7QUFOdkQsTUFBTSxLQUFLLEdBQUcsa0JBQVEsQ0FBQyxLQUFLLENBQVMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0FBRTNELE1BQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQXFDLFNBQVMsRUFBRSxhQUFhLENBQUMsQ0FBQztBQUl6RiwwQkFBTztBQUhoQixNQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFxQyxTQUFTLEVBQUUsYUFBYSxDQUFDLENBQUM7QUFHaEYsMEJBQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UsIHsgU2NoZW1hIH0gZnJvbSAnbW9uZ29vc2UnO1xuaW1wb3J0IHsgSVVzZXIgfSBmcm9tICcuL3VzZXIubW9kZWwnO1xuaW1wb3J0IHsgSUNoYW1wRmljaGVUTiB9IGZyb20gJy4vY2hhbXBGaWNoZVROLm1vZGVsJztcbmltcG9ydCB7IElDaGFtcEZpY2hlRlIgfSBmcm9tICcuL2NoYW1wRmljaGVGUi5tb2RlbCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUZpY2hlIGV4dGVuZHMgRG9jdW1lbnQge1xuICBkYXRlRGVidXQ6IERhdGU7XG4gIGRhdGVGaW46IERhdGU7XG4gIHBvc3RPY2N1cGU6IHN0cmluZztcbiAgbWF0cmljdWxlOiBzdHJpbmc7XG4gIG51bVNlY3VyaXRlU29jaWFsOiBudW1iZXI7XG4gIG5ldFBheWU6IG51bWJlcjtcbiAgYmVuZWZpY2lhaXJlOiBJVXNlcjtcbn1cbi8qaW50ZXJmYWNlIElGaWNoZU1vZGVsIGV4dGVuZHMgbW9uZ29vc2UuTW9kZWw8SUZpY2hlPiB7XG4gIGJ1aWxkKGF0dHJzOiBJRmljaGUpOiBJRmljaGU7XG59Ki9cbmludGVyZmFjZSBJRmljaGVUTk1vZGVsIGV4dGVuZHMgbW9uZ29vc2UuTW9kZWw8SUZpY2hlVE4+IHtcbiAgYnVpbGQoYXR0cnM6IElGaWNoZVROKTogSUZpY2hlVE47XG59XG5pbnRlcmZhY2UgSUZpY2hlRlJNb2RlbCBleHRlbmRzIG1vbmdvb3NlLk1vZGVsPElGaWNoZUZSPiB7XG4gIGJ1aWxkKGF0dHJzOiBJRmljaGVGUik6IElGaWNoZUZSO1xufVxuZXhwb3J0IGludGVyZmFjZSBJRmljaGVUTiBleHRlbmRzIElGaWNoZSB7XG4gIENoYW1wRmljaGU/OiBBcnJheTxJQ2hhbXBGaWNoZVROPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRmljaGVGUiBleHRlbmRzIElGaWNoZSB7XG4gIENoYW1wRmljaGU/OiBBcnJheTxJQ2hhbXBGaWNoZUZSPjtcbn1cblxuY29uc3QgZmljaGVTID0ge1xuICBkYXRlRGVidXQ6IHtcbiAgICB0eXBlOiBEYXRlLFxuICAgIGlzUmVxdWlyZWQ6IHRydWUsXG4gICAgbm90RW1wdHk6IHRydWUsXG4gICAgZXJyb3JNZXNzYWdlOiAnZGF0ZSBmaWVsZCBzaG91bGQgbm90IGJlIGVtcHR5JyxcbiAgICBtYXRjaGVzOiB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICBvcHRpb25zOiBbL15cXGR7NH1cXC0oMD9bMS05XXwxWzAxMl0pXFwtKDA/WzEtOV18WzEyXVswLTldfDNbMDFdKSQvXSxcbiAgICAgIGVycm9yTWVzc2FnZTogJ1BsZWFzZSBlbnRlciBhIGRhdGUgZm9ybSB5eXl5LW1tLWRkIG9yIHl5eXktbS1kJyxcbiAgICB9LFxuICAgIGlzRGF0ZTogeyBuZWdhdGVkOiBmYWxzZSwgZXJyb3JNZXNzYWdlOiAnaW52YWxpZCBkYXRlJyB9LFxuICB9LFxuICBkYXRlRmluOiB7XG4gICAgdHlwZTogRGF0ZSxcbiAgICBpc1JlcXVpcmVkOiB0cnVlLFxuICAgIG5vdEVtcHR5OiB0cnVlLFxuICAgIGVycm9yTWVzc2FnZTogJ2RhdGUgZmllbGQgc2hvdWxkIG5vdCBiZSBlbXB0eScsXG4gICAgbWF0Y2hlczoge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgb3B0aW9uczogWy9eXFxkezR9XFwtKDA/WzEtOV18MVswMTJdKVxcLSgwP1sxLTldfFsxMl1bMC05XXwzWzAxXSkkL10sXG4gICAgICBlcnJvck1lc3NhZ2U6ICdQbGVhc2UgZW50ZXIgYSBkYXRlIGZvcm0geXl5eS1tbS1kZCBvciB5eXl5LW0tZCcsXG4gICAgfSxcbiAgICBpc0RhdGU6IHsgbmVnYXRlZDogZmFsc2UsIGVycm9yTWVzc2FnZTogJ2ludmFsaWQgZGF0ZScgfSxcbiAgfSxcbiAgcG9zdE9jY3VwZToge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICBpc1JlcXVpcmVkOiB0cnVlLFxuICAgIG5vdEVtcHR5OiB0cnVlLFxuICAgIGVycm9yTWVzc2FnZTogJ3Bvc3RlT2NjdXBlIGZpZWxkIHNob3VsZCBub3QgYmUgZW1wdHknLFxuICB9LFxuICBtYXRyaWN1bGU6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgaXNSZXF1aXJlZDogdHJ1ZSxcbiAgICBub3RFbXB0eTogdHJ1ZSxcbiAgICBlcnJvck1lc3NhZ2U6ICdtYXRyaWN1bGUgZmllbGQgc2hvdWxkIG5vdCBiZSBlbXB0eScsXG4gIH0sXG4gIG51bVNlY3VyaXRlU29jaWFsOiB7XG4gICAgdHlwZTogTnVtYmVyLFxuICAgIGlzUmVxdWlyZWQ6IHRydWUsXG4gICAgaXNJbnQ6IHRydWUsXG4gICAgZXJyb3JNZXNzYWdlOiAnbnVtZXJvIHNob3VsZCBiZSBpbnRlZ2VyJyxcbiAgfSxcbiAgbmV0UGF5ZToge1xuICAgIHR5cGU6IE51bWJlcixcbiAgfSxcbiAgYmVuZWZpY2lhaXJlOiB7XG4gICAgcmVmOiAnVXNlcicsXG4gICAgdHlwZTogbW9uZ29vc2UuU2NoZW1hLlR5cGVzLk9iamVjdElkLFxuICB9LFxufTtcbmNvbnN0IGZpY2hlU2NoZW1hID0gbmV3IFNjaGVtYTxJRmljaGU+KGZpY2hlUyk7XG5cbmNvbnN0IGZpY2hlVE5TY2hlbWEgPSBuZXcgU2NoZW1hPElGaWNoZVROPih7XG4gIENoYW1wRmljaGU6IFtcbiAgICB7XG4gICAgICB0eXBlOiBtb25nb29zZS5TY2hlbWEuVHlwZXMuT2JqZWN0SWQsXG4gICAgICByZWY6ICdjaGFtcEZpY2hlVE4nLFxuICAgIH0sXG4gIF0sXG59KTtcbmZpY2hlVE5TY2hlbWEuc3RhdGljcy5idWlsZCA9IChhdHRyczogSUZpY2hlVE4pID0+IHtcbiAgcmV0dXJuIG5ldyBGaWNoZVROKGF0dHJzKTtcbn07XG5jb25zdCBmaWNoZUZSU2NoZW1hID0gbmV3IFNjaGVtYTxJRmljaGVGUj4oe1xuICBDaGFtcEZpY2hlOiBbXG4gICAge1xuICAgICAgdHlwZTogbW9uZ29vc2UuU2NoZW1hLlR5cGVzLk9iamVjdElkLFxuICAgICAgcmVmOiAnY2hhbXBGaWNoZUZSJyxcbiAgICB9LFxuICBdLFxufSk7XG5cbmNvbnN0IEZpY2hlID0gbW9uZ29vc2UubW9kZWw8SUZpY2hlPignRmljaGUnLCBmaWNoZVNjaGVtYSk7XG4vL2NvbnN0IEZpY2hlVE4gPSBtb25nb29zZS5tb2RlbDxJRmljaGVUTiwgSUZpY2hlVE5Nb2RlbD4oJ0ZpY2hlVE4nLCBmaWNoZVROU2NoZW1hKTtcbmNvbnN0IEZpY2hlVE4gPSBGaWNoZS5kaXNjcmltaW5hdG9yPElGaWNoZVROLCBtb25nb29zZS5Nb2RlbDxJRmljaGVUTj4+KCdGaWNoZVROJywgZmljaGVUTlNjaGVtYSk7XG5jb25zdCBGaWNoZUZSID0gRmljaGUuZGlzY3JpbWluYXRvcjxJRmljaGVGUiwgbW9uZ29vc2UuTW9kZWw8SUZpY2hlRlI+PignRmljaGVGUicsIGZpY2hlRlJTY2hlbWEpO1xuLy8gY29uc3QgRmljaGVGUiA9IG1vbmdvb3NlLm1vZGVsPElGaWNoZUZSPignRmljaGVGUicsZmljaGVGUlNjaGVtYSk7XG5cbmV4cG9ydCB7IEZpY2hlVE4sIEZpY2hlRlIsIGZpY2hlVE5TY2hlbWEsIGZpY2hlRlJTY2hlbWEsIGZpY2hlUyB9O1xuIl19