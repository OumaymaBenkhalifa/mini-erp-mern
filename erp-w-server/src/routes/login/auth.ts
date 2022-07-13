import express from 'express';
const { checkSchema } = require('express-validator');
import { validate } from '../../schemas/validateSchema';
import { UserSchema } from '../../models/user.model';
import * as authController from '../../controllers/auth.controller';
const router = express.Router();

router.post('/register', validate(checkSchema(UserSchema)), authController.register);
router.post('/login', validate(checkSchema(UserSchema)), authController.login);

export { router as authRouter };
