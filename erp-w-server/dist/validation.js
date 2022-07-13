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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbInZhbGlkYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxvREFBNEI7QUFFNUIsTUFBTSxHQUFHLEdBQUcsYUFBRyxDQUFDO0FBRWhCLE1BQU0sa0JBQWtCLEdBQUcsQ0FBQyxJQUFZLEVBQUUsRUFBRTtJQUMxQyxNQUFNLE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO1FBQ3hCLEdBQUcsRUFBRSxHQUFHLENBQUMsTUFBTSxFQUFFO2FBQ2QsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUNOLFFBQVEsRUFBRTthQUNWLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFDekIsTUFBTSxFQUFFLEdBQUcsQ0FBQyxNQUFNLEVBQUU7YUFDakIsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUNOLFFBQVEsRUFBRTthQUNWLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFDekIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsU0FBUyxDQUFDO1FBQy9FLEtBQUssRUFBRSxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssRUFBRTtRQUM3QyxRQUFRLEVBQUUsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLEVBQUU7S0FDcEQsQ0FBQyxDQUFDO0lBQ0gsT0FBTyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQy9CLENBQUMsQ0FBQztBQUVGLE1BQU0sZUFBZSxHQUFHLENBQUMsSUFBWSxFQUFFLEVBQUU7SUFDdkMsTUFBTSxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztRQUN4QixLQUFLLEVBQUUsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLEVBQUU7UUFDN0MsUUFBUSxFQUFFLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFO0tBQ3pDLENBQUMsQ0FBQztJQUNILE9BQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMvQixDQUFDLENBQUM7QUFFRixNQUFNLENBQUMsT0FBTyxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7QUFDakQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsR0FBRyxrQkFBa0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBqb2kgZnJvbSAnQGhhcGkvam9pJztcblxuY29uc3QgSm9pID0gam9pO1xuXG5jb25zdCByZWdpc3RlclZhbGlkYXRpb24gPSAoZGF0YTogb2JqZWN0KSA9PiB7XG4gIGNvbnN0IFNjaGVtYSA9IEpvaS5vYmplY3Qoe1xuICAgIG5vbTogSm9pLnN0cmluZygpXG4gICAgICAubWluKDMpXG4gICAgICAucmVxdWlyZWQoKVxuICAgICAgLnBhdHRlcm4oL15bYS16QS1aXSskLyksXG4gICAgcHJlbm9tOiBKb2kuc3RyaW5nKClcbiAgICAgIC5taW4oMylcbiAgICAgIC5yZXF1aXJlZCgpXG4gICAgICAucGF0dGVybigvXlthLXpBLVpdKyQvKSxcbiAgICByb2xlOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKS52YWxpZCgnYWRtaW4nLCAnc3VwZXJBZG1pbicsICdjbGllbnQnLCAnZW1wbG95ZScpLFxuICAgIGVtYWlsOiBKb2kuc3RyaW5nKCkubWluKDYpLnJlcXVpcmVkKCkuZW1haWwoKSxcbiAgICBwYXNzd29yZDogSm9pLnN0cmluZygpLm1pbig2KS5yZXF1aXJlZCgpLmFscGhhbnVtKCksXG4gIH0pO1xuICByZXR1cm4gU2NoZW1hLnZhbGlkYXRlKGRhdGEpO1xufTtcblxuY29uc3QgbG9naW5WYWxpZGF0aW9uID0gKGRhdGE6IG9iamVjdCkgPT4ge1xuICBjb25zdCBTY2hlbWEgPSBKb2kub2JqZWN0KHtcbiAgICBlbWFpbDogSm9pLnN0cmluZygpLm1pbig2KS5yZXF1aXJlZCgpLmVtYWlsKCksXG4gICAgcGFzc3dvcmQ6IEpvaS5zdHJpbmcoKS5taW4oNikucmVxdWlyZWQoKSxcbiAgfSk7XG4gIHJldHVybiBTY2hlbWEudmFsaWRhdGUoZGF0YSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5sb2dpblZhbGlkYXRpb24gPSBsb2dpblZhbGlkYXRpb247XG5tb2R1bGUuZXhwb3J0cy5yZWdpc3RlclZhbGlkYXRpb24gPSByZWdpc3RlclZhbGlkYXRpb247XG4iXX0=