"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.addUser = exports.getUserByEmail = exports.getAllUsers = void 0;
const user_model_1 = require("../models/user.model");
const facture_model_1 = require("../models/facture.model");
const getAllUsers = async (req, res) => {
    const user = await user_model_1.User.find().sort('date').exec();
    return res.send(user);
};
exports.getAllUsers = getAllUsers;
const getUserByEmail = async (req, res) => {
    const user = await user_model_1.User.findOne({ email: req.params.email });
    if (user) {
        return res.status(200).send(user);
    }
    else {
        return res.status(400).send('no user with email:' + req.params.email);
    }
};
exports.getUserByEmail = getUserByEmail;
const addUser = async (req, res) => {
    const currentUser = await user_model_1.User.findOne({ email: req.body.email });
    if (currentUser)
        return res.status(400).send('Email already exists');
    const user = new user_model_1.User(req.body);
    try {
        const savedUser = await user.save();
        res.send(savedUser);
    }
    catch (err) {
        res.status(400);
    }
};
exports.addUser = addUser;
const updateUser = async (req, res) => {
    const user = await user_model_1.User.findOne({ email: req.params.email });
    if (user) {
        user_model_1.User.updateOne({ _id: user._id }, { nom: req.body.nom, prenom: req.body.prenom, password: req.body.password }, function (err, data) {
            if (err) {
                return res.status(400).send('erreur');
            }
            else {
                return res.status(200).send('user updated successfully');
            }
        });
        try {
            await user.save();
        }
        catch (err) {
            res.status(400);
        }
    }
    else {
        return res.status(400).send('email introuvable');
    }
};
exports.updateUser = updateUser;
const deleteUser = async (req, res) => {
    const user = await user_model_1.User.findOne({ email: req.params.email });
    if (user) {
        await user_model_1.User.deleteOne({ email: user.email });
        if (user.factures) {
            user.factures.forEach(async (facture) => {
                await facture_model_1.Facture.deleteOne({ _id: facture });
            });
        }
        return res.status(200).send('user deleted');
    }
    else {
        return res.status(404).send('no user with email: ' + req.params.email);
    }
};
exports.deleteUser = deleteUser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4uY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL2FkbWluLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscURBQXdEO0FBQ3hELDJEQUFrRDtBQUczQyxNQUFNLFdBQVcsR0FBRyxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQzVDLE1BQU0sSUFBSSxHQUFHLE1BQU0saUJBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDbkQsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3hCLENBQUMsQ0FBQztBQUhXLFFBQUEsV0FBVyxlQUd0QjtBQUVLLE1BQU0sY0FBYyxHQUFHLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDL0MsTUFBTSxJQUFJLEdBQUcsTUFBTSxpQkFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDN0QsSUFBSSxJQUFJLEVBQUU7UUFDUixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ25DO1NBQU07UUFDTCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDdkU7QUFDSCxDQUFDLENBQUM7QUFQVyxRQUFBLGNBQWMsa0JBT3pCO0FBRUssTUFBTSxPQUFPLEdBQUcsS0FBSyxFQUFFLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtJQUUzRCxNQUFNLFdBQVcsR0FBRyxNQUFNLGlCQUFJLENBQUMsT0FBTyxDQUFDLEVB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QU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUN4RTtBQUNILENBQUMsQ0FBQztBQWJXLFFBQUEsVUFBVSxjQWFyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVzZXIsIFVzZXJTY2hlbWEgfSBmcm9tICcuLi9tb2RlbHMvdXNlci5tb2RlbCc7XHJcbmltcG9ydCB7IEZhY3R1cmUgfSBmcm9tICcuLi9tb2RlbHMvZmFjdHVyZS5tb2RlbCc7XHJcbmltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlLCBOZXh0RnVuY3Rpb24gfSBmcm9tICdleHByZXNzJztcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRBbGxVc2VycyA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmQoKS5zb3J0KCdkYXRlJykuZXhlYygpO1xyXG4gIHJldHVybiByZXMuc2VuZCh1c2VyKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyQnlFbWFpbCA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoeyBlbWFpbDogcmVxLnBhcmFtcy5lbWFpbCB9KTtcclxuICBpZiAodXNlcikge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHVzZXIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoJ25vIHVzZXIgd2l0aCBlbWFpbDonICsgcmVxLnBhcmFtcy5lbWFpbCk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFVzZXIgPSBhc3luYyAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgLy9jaGVjayBpZiBlbWFpbCBleGlzdHNcclxuICBjb25zdCBjdXJyZW50VXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IGVtYWlsOiByZXEuYm9keS5lbWFpbCB9KTtcclxuICBpZiAoY3VycmVudFVzZXIpIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCgnRW1haWwgYWxyZWFkeSBleGlzdHMnKTtcclxuXHJcbiAgY29uc3QgdXNlciA9IG5ldyBVc2VyKHJlcS5ib2R5KTtcclxuXHJcbiAgLypjb25zdCB1c2VyID0gbmV3IFVzZXIoe1xyXG4gICAgbm9tOiByZXEuYm9keS5ub20sXHJcbiAgICBwcmVub206IHJlcS5ib2R5LnByZW5vbSxcclxuICAgIHJvbGU6IHJlcS5ib2R5LnJvbGUsXHJcbiAgICBlbWFpbDogcmVxLmJvZHkuZW1haWwsXHJcbiAgICBwYXNzd29yZDogcmVxLmJvZHkucGFzc3dvcmQsXHJcbiAgICBmYWN0dXJlczogQXJyYXkoKSxcclxuICB9KTsqL1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzYXZlZFVzZXIgPSBhd2FpdCB1c2VyLnNhdmUoKTtcclxuICAgIHJlcy5zZW5kKHNhdmVkVXNlcik7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICByZXMuc3RhdHVzKDQwMCk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZVVzZXIgPSBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kT25lKHsgZW1haWw6IHJlcS5wYXJhbXMuZW1haWwgfSk7XHJcbiAgaWYgKHVzZXIpIHtcclxuICAgIFVzZXIudXBkYXRlT25lKFxyXG4gICAgICB7IF9pZDogdXNlci5faWQgfSxcclxuICAgICAgeyBub206IHJlcS5ib2R5Lm5vbSwgcHJlbm9tOiByZXEuYm9keS5wcmVub20sIHBhc3N3b3JkOiByZXEuYm9keS5wYXNzd29yZCB9LFxyXG4gICAgICBmdW5jdGlvbiAoZXJyLCBkYXRhKSB7XHJcbiAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCdlcnJldXInKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKCd1c2VyIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCB1c2VyLnNhdmUoKTtcclxuICAgICAgLy8gcmVzLnNlbmQoc2F2ZWRVc2VyKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICByZXMuc3RhdHVzKDQwMCk7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCgnZW1haWwgaW50cm91dmFibGUnKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlVXNlciA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoeyBlbWFpbDogcmVxLnBhcmFtcy5lbWFpbCB9KTtcclxuICBpZiAodXNlcikge1xyXG4gICAgYXdhaXQgVXNlci5kZWxldGVPbmUoeyBlbWFpbDogdXNlci5lbWFpbCB9KTtcclxuICAgIGlmICh1c2VyLmZhY3R1cmVzKSB7XHJcbiAgICAgIHVzZXIuZmFjdHVyZXMuZm9yRWFjaChhc3luYyAoZmFjdHVyZSkgPT4ge1xyXG4gICAgICAgIGF3YWl0IEZhY3R1cmUuZGVsZXRlT25lKHsgX2lkOiBmYWN0dXJlIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCgndXNlciBkZWxldGVkJyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuc2VuZCgnbm8gdXNlciB3aXRoIGVtYWlsOiAnICsgcmVxLnBhcmFtcy5lbWFpbCk7XHJcbiAgfVxyXG59O1xyXG4iXX0=