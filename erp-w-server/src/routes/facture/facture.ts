const express = require('express');
const router = express.Router();
const { checkSchema } = require('express-validator');
import { validate } from '../../schemas/validateSchema';
import { factureSchema } from '../../models/facture.model';
import * as factureController from '../../controllers/facture.controller';
import { authPage } from '../../middlewares/checkRole';
import passport from 'passport';

const CheckSchema = checkSchema;
/* GET factures listing. */
router.get('/',passport.authenticate('jwt', { session: false }),authPage(['admin','superAdmin']), factureController.getAllfactures);

/* ADD new facture */
router.post('/add',passport.authenticate('jwt', { session: false }),authPage(['admin','superAdmin']), validate(CheckSchema(factureSchema)), factureController.addfacture);

/* UPDATE facture infos */
router.put('/update/:id',passport.authenticate('jwt', { session: false }),authPage(['admin','superAdmin']),  factureController.updatefacture);

/* DELETE facture */
router.delete('/delete/:id', passport.authenticate('jwt', { session: false }),authPage(['admin','superAdmin']),  factureController.deletefacture);

/* GET facture owner */
router.get('/:id',passport.authenticate('jwt', { session: false }),authPage(['admin','superAdmin']),  factureController.getClient);

router.get('/list/:email',passport.authenticate('jwt', { session: false }),authPage(['client', 'admin', 'superAdmin']),  factureController.getFactureByClient); 
export { router as factureRouter };
