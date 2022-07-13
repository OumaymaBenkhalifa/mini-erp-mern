"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_model_1 = require("../models/user.model");
const userController = require('./user.controller');
const bcrypt = bcryptjs_1.default;
const jwt = jsonwebtoken_1.default;
const { loginValidation } = require('../schemas/validation');
const register = async (req, res) => {
    userController.addUser(req, res);
};
exports.register = register;
const login = async (req, res) => {
    const currentUser = await user_model_1.User.findOne({ email: req.body.email });
    if (!currentUser)
        return res.status(400).send("Email doesn't exist");
    const passwordCorrect = await bcrypt.compare(req.body.password, currentUser.password);
    if (!passwordCorrect)
        return res.status(400).send('invalid password');
    const token = jwt.sign({ id: currentUser._id }, process.env.TOKEN_SECRET);
    res.header('access_token', token).send(token);
};
exports.login = login;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiY29udHJvbGxlcnMvYXV0aC5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHdEQUE4QjtBQUM5QixnRUFBK0I7QUFDL0IscURBQTRDO0FBRTVDLE1BQU0sY0FBYyxHQUFHLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBQ3BELE1BQU0sTUFBTSxHQUFHLGtCQUFNLENBQUM7QUFDdEIsTUFBTSxHQUFHLEdBQUcsc0JBQUcsQ0FBQztBQUNoQixNQUFNLEVBQUUsZUFBZSxFQUFFLEdBQUcsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUM7QUFFdEQsTUFBTSxRQUFRLEdBQUcsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtJQUN6QyxjQUFjLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUNuQyxDQUFDLENBQUM7QUFGVyxRQUFBLFFBQVEsWUFFbkI7QUFFSyxNQUFNLEtBQUssR0FBRyxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBRXRDLE1BQU0sV0FBVyxHQUFHLE1BQU0saUJBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ2xFLElBQUksQ0FBQyxXQUFXO1FBQUUsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBRXJFLE1BQU0sZUFBZSxHQUFHLE1BQU0sTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdEYsSUFBSSxDQUFDLGVBQWU7UUFBRSxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFJdEUsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxXQUFXLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFhLENBQUMsQ0FBQztJQUMzRSxHQUFHLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDaEQsQ0FBQyxDQUFDO0FBWlcsUUFBQSxLQUFLLFNBWWhCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJjcnlwdCBmcm9tICdiY3J5cHRqcyc7XG5pbXBvcnQgSnd0IGZyb20gJ2pzb253ZWJ0b2tlbic7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vbW9kZWxzL3VzZXIubW9kZWwnO1xuXG5jb25zdCB1c2VyQ29udHJvbGxlciA9IHJlcXVpcmUoJy4vdXNlci5jb250cm9sbGVyJyk7XG5jb25zdCBiY3J5cHQgPSBCY3J5cHQ7XG5jb25zdCBqd3QgPSBKd3Q7XG5jb25zdCB7IGxvZ2luVmFsaWRhdGlvbiB9ID0gcmVxdWlyZSgnLi4vc2NoZW1hcy92YWxpZGF0aW9uJyk7XG5cbmV4cG9ydCBjb25zdCByZWdpc3RlciA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICB1c2VyQ29udHJvbGxlci5hZGRVc2VyKHJlcSwgcmVzKTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2dpbiA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAvL2NoZWNrIGlmIGVtYWlsIGV4aXN0c1xuICBjb25zdCBjdXJyZW50VXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IGVtYWlsOiByZXEuYm9keS5lbWFpbCB9KTtcbiAgaWYgKCFjdXJyZW50VXNlcikgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKFwiRW1haWwgZG9lc24ndCBleGlzdFwiKTtcbiAgLy8gY2hlY2sgaWYgcGFzc3dvcmQgY29ycmVjdFxuICBjb25zdCBwYXNzd29yZENvcnJlY3QgPSBhd2FpdCBiY3J5cHQuY29tcGFyZShyZXEuYm9keS5wYXNzd29yZCwgY3VycmVudFVzZXIucGFzc3dvcmQpO1xuICBpZiAoIXBhc3N3b3JkQ29ycmVjdCkgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCdpbnZhbGlkIHBhc3N3b3JkJyk7XG4gIC8vaWYgKGN1cnJlbnRVc2VyICYmIHBhc3N3b3JkQ29ycmVjdCkgcmV0dXJuIHJlcy5zZW5kKCdsb2dnZWQgaW4nKTtcbiAgLy9jcmVhdGUgYW5kIGFzc2lnbiB0b2tlblxuXG4gIGNvbnN0IHRva2VuID0gand0LnNpZ24oeyBpZDogY3VycmVudFVzZXIuX2lkIH0sIHByb2Nlc3MuZW52LlRPS0VOX1NFQ1JFVCEpO1xuICByZXMuaGVhZGVyKCdhY2Nlc3NfdG9rZW4nLCB0b2tlbikuc2VuZCh0b2tlbik7XG59O1xuIl19