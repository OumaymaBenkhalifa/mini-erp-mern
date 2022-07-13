import Bcrypt from 'bcryptjs';
import Jwt from 'jsonwebtoken';
import { User } from '../models/user.model';

const userController = require('./user.controller');
const bcrypt = Bcrypt;
const jwt = Jwt;
const { loginValidation } = require('../schemas/validation');

export const register = async (req, res) => {
  userController.addUser(req, res);
};

export const login = async (req, res) => {
  //check if email exists
  const currentUser = await User.findOne({ email: req.body.email });
  if (!currentUser) return res.status(400).send("Email doesn't exist");
  // check if password correct
  const passwordCorrect = await bcrypt.compare(req.body.password, currentUser.password);
  if (!passwordCorrect) return res.status(400).send('invalid password');
  //if (currentUser && passwordCorrect) return res.send('logged in');
  //create and assign token

  const token = jwt.sign({ id: currentUser._id }, process.env.TOKEN_SECRET!);
  res.header('access_token', token).send(token);
};
