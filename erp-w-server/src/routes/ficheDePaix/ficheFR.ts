const express = require('express');
const router = express.Router();
const { checkSchema } = require('express-validator');
import { validate } from '../../schemas/validateSchema';
import { ficheS } from '../../models/fichePaix.model';
import * as ficheController from '../../controllers/ficheDePaix.controller';
import { authPage } from '../../middlewares/checkRole';
import passport from 'passport';
const CheckSchema = checkSchema;
/* GET fiches listing. */
router.get('/', passport.authenticate('jwt', { session: false }),authPage(['admin','superAdmin']),ficheController.getAllfichesFR);

/* ADD new fiche */
router.post('/add',  passport.authenticate('jwt', { session: false }),authPage(['admin','superAdmin']), validate(CheckSchema(ficheS)), ficheController.addFicheFR);

/* UPDATE fiche infos */
router.put('/update/:id', passport.authenticate('jwt', { session: false }),authPage(['admin','superAdmin']), ficheController.updateFicheFR);

/* DELETE fiche */
router.delete('/delete/:id', passport.authenticate('jwt', { session: false }),authPage(['admin','superAdmin']), ficheController.deleteficheFR);

/* GET fiche owner */
//router.get('/:id', ficheController.getEmploye);

router.get('/list/:email',passport.authenticate('jwt', { session: false }),authPage(['employee', 'admin', 'superAdmin']),  ficheController.getFicheFRByEmployee); 


export { router as ficheFRRouter };
