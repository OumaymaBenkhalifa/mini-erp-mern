"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require('dotenv').config();
const dotenv = require('dotenv');
dotenv.config();
const jwt = jsonwebtoken_1.default;
function auth(req, res, next) {
    const token = req.header('auth-token');
    if (!token)
        return res.status(401).send('Access denied');
    try {
        const verified = jwt.verify(token, '1235659');
        req.user = verified;
    }
    catch (err) {
        res.status(400).send('Invalid Token');
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVyaWZ5VG9rZW4uanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJyb3V0ZXMvdG9rZW4vdmVyaWZ5VG9rZW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxnRUFBK0I7QUFFL0IsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQzNCLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNqQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDaEIsTUFBTSxHQUFHLEdBQUcsc0JBQUcsQ0FBQztBQUNoQixTQUFTLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUk7SUFDMUIsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN2QyxJQUFJLENBQUMsS0FBSztRQUFFLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7SUFFekQsSUFBSTtRQUNGLE1BQU0sUUFBUSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQzlDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO0tBQ3JCO0lBQUMsT0FBTyxHQUFHLEVBQUU7UUFDWixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztLQUN2QztBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSnd0IGZyb20gJ2pzb253ZWJ0b2tlbic7XG5cbnJlcXVpcmUoJ2RvdGVudicpLmNvbmZpZygpO1xuY29uc3QgZG90ZW52ID0gcmVxdWlyZSgnZG90ZW52Jyk7XG5kb3RlbnYuY29uZmlnKCk7XG5jb25zdCBqd3QgPSBKd3Q7XG5mdW5jdGlvbiBhdXRoKHJlcSwgcmVzLCBuZXh0KSB7XG4gIGNvbnN0IHRva2VuID0gcmVxLmhlYWRlcignYXV0aC10b2tlbicpO1xuICBpZiAoIXRva2VuKSByZXR1cm4gcmVzLnN0YXR1cyg0MDEpLnNlbmQoJ0FjY2VzcyBkZW5pZWQnKTtcblxuICB0cnkge1xuICAgIGNvbnN0IHZlcmlmaWVkID0gand0LnZlcmlmeSh0b2tlbiwgJzEyMzU2NTknKTtcbiAgICByZXEudXNlciA9IHZlcmlmaWVkO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXMuc3RhdHVzKDQwMCkuc2VuZCgnSW52YWxpZCBUb2tlbicpO1xuICB9XG59XG4iXX0=