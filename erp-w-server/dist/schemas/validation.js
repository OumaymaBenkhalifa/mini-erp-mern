"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("@hapi/joi"));
const Joi = joi_1.default;
const registerValidation = (data) => {
    const Schema = Joi.object({
        nom: Joi.string()
            .min(3)
            .required()
            .pattern(/^[a-zA-Z]+$/),
        prenom: Joi.string()
            .min(3)
            .required()
            .pattern(/^[a-zA-Z]+$/),
        role: Joi.string().required().valid('admin', 'superAdmin', 'client', 'employe'),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required().alphanum(),
    });
    return Schema.validate(data);
};
const loginValidation = (data) => {
    const Schema = Joi.object({
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required(),
    });
    return Schema.validate(data);
};
module.exports.loginValidation = loginValidation;
module.exports.registerValidation = registerValidation;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbInNjaGVtYXMvdmFsaWRhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLG9EQUE0QjtBQUU1QixNQUFNLEdBQUcsR0FBRyxhQUFHLENBQUM7QUFFaEIsTUFBTSxrQkFBa0IsR0FBRyxDQUFDLElBQVksRUFBRSxFQUFFO0lBQzFDLE1BQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7UUFDeEIsR0FBRyxFQUFFLEdBQUcsQ0FBQyxNQUFNLEVBQUU7YUFDZCxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQ04sUUFBUSxFQUFFO2FBQ1YsT0FBTyxDQUFDLGFBQWEsQ0FBQztRQUN6QixNQUFNLEVBQUUsR0FBRyxDQUFDLE1BQU0sRUFBRTthQUNqQixHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQ04sUUFBUSxFQUFFO2FBQ1YsT0FBTyxDQUFDLGFBQWEsQ0FBQztRQUN6QixJQUFJLEVBQUUsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxTQUFTLENBQUM7UUFDL0UsS0FBSyxFQUFFLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxFQUFFO1FBQzdDLFFBQVEsRUFBRSxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsRUFBRTtLQUNwRCxDQUFDLENBQUM7SUFDSCxPQUFPLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDL0IsQ0FBQyxDQUFDO0FBRUYsTUFBTSxlQUFlLEdBQUcsQ0FBQyxJQUFZLEVBQUUsRUFBRTtJQUN2QyxNQUFNLE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO1FBQ3hCLEtBQUssRUFBRSxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssRUFBRTtRQUM3QyxRQUFRLEVBQUUsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUU7S0FDekMsQ0FBQyxDQUFDO0lBQ0gsT0FBTyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQy9CLENBQUMsQ0FBQztBQUVGLE1BQU0sQ0FBQyxPQUFPLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQztBQUNqRCxNQUFNLENBQUMsT0FBTyxDQUFDLGtCQUFrQixHQUFHLGtCQUFrQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGpvaSBmcm9tICdAaGFwaS9qb2knO1xuXG5jb25zdCBKb2kgPSBqb2k7XG5cbmNvbnN0IHJlZ2lzdGVyVmFsaWRhdGlvbiA9IChkYXRhOiBvYmplY3QpID0+IHtcbiAgY29uc3QgU2NoZW1hID0gSm9pLm9iamVjdCh7XG4gICAgbm9tOiBKb2kuc3RyaW5nKClcbiAgICAgIC5taW4oMylcbiAgICAgIC5yZXF1aXJlZCgpXG4gICAgICAucGF0dGVybigvXlthLXpBLVpdKyQvKSxcbiAgICBwcmVub206IEpvaS5zdHJpbmcoKVxuICAgICAgLm1pbigzKVxuICAgICAgLnJlcXVpcmVkKClcbiAgICAgIC5wYXR0ZXJuKC9eW2EtekEtWl0rJC8pLFxuICAgIHJvbGU6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLnZhbGlkKCdhZG1pbicsICdzdXBlckFkbWluJywgJ2NsaWVudCcsICdlbXBsb3llJyksXG4gICAgZW1haWw6IEpvaS5zdHJpbmcoKS5taW4oNikucmVxdWlyZWQoKS5lbWFpbCgpLFxuICAgIHBhc3N3b3JkOiBKb2kuc3RyaW5nKCkubWluKDYpLnJlcXVpcmVkKCkuYWxwaGFudW0oKSxcbiAgfSk7XG4gIHJldHVybiBTY2hlbWEudmFsaWRhdGUoZGF0YSk7XG59O1xuXG5jb25zdCBsb2dpblZhbGlkYXRpb24gPSAoZGF0YTogb2JqZWN0KSA9PiB7XG4gIGNvbnN0IFNjaGVtYSA9IEpvaS5vYmplY3Qoe1xuICAgIGVtYWlsOiBKb2kuc3RyaW5nKCkubWluKDYpLnJlcXVpcmVkKCkuZW1haWwoKSxcbiAgICBwYXNzd29yZDogSm9pLnN0cmluZygpLm1pbig2KS5yZXF1aXJlZCgpLFxuICB9KTtcbiAgcmV0dXJuIFNjaGVtYS52YWxpZGF0ZShkYXRhKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzLmxvZ2luVmFsaWRhdGlvbiA9IGxvZ2luVmFsaWRhdGlvbjtcbm1vZHVsZS5leHBvcnRzLnJlZ2lzdGVyVmFsaWRhdGlvbiA9IHJlZ2lzdGVyVmFsaWRhdGlvbjtcbiJdfQ==