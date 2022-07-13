const express = require('express');
const router = express.Router();
const { checkSchema } = require('express-validator');
import { validate } from '../../schemas/validateSchema';
import { champSchema } from '../../models/champFacture.model';
import * as champFactureController from '../../controllers/champFacture.controller';
const CheckSchema = checkSchema;
/* GET champ listing. */
router.get('/list', champFactureController.getAllChamps);

/* ADD new champ */
router.post('/add/:id', validate(CheckSchema(champSchema)), champFactureController.addChamp);

/* UPDATE champ */
router.put('/update/:id', champFactureController.updateChamp);

/* DELETE champ */
router.delete('/delete/:id', champFactureController.deleteChamp);

/* GET facture owner*/
router.get('/:id', champFactureController.getFacture);

export { router as champRouter };
