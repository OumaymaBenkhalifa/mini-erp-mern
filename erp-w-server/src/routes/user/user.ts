import Express from 'express';
const { checkSchema } = require('express-validator');
import { validate } from '../../schemas/validateSchema';
import { UserSchema } from '../../models/user.model';
import * as userController from '../../controllers/user.controller';
import { authPage } from '../../middlewares/checkRole';
import passport from 'passport';
const router = Express.Router();

/* GET users listing. */
router.get('/list', userController.getAllUsers);

/* GET user by email */
router.get('/:email', userController.getUserByEmail);

/* ADD new user */
router.post('/add', passport.authenticate('jwt', { session: false }),authPage(['admin','superAdmin']), validate(checkSchema(UserSchema)), userController.addUser);

/* UPDATE user infos */
router.put('/update/:email',passport.authenticate('jwt', { session: false }),authPage(['admin','superAdmin']), userController.updateUser);

/* DELETE user */
router.delete('/delete/:email', passport.authenticate('jwt', { session: false }),authPage(['admin','superAdmin']),userController.deleteUser);

/* GET all factures for user */
router.get('/factures/:_id', userController.getAllFactures);

export { router as userRouter };
