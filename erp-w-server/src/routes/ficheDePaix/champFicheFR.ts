const express = require('express');
const router = express.Router();
import { ChampFicheFRS } from '../../models/champFicheFR.model';
import { validate } from '../../schemas/validateSchema';
const { checkSchema } = require('express-validator');
import * as champFicheController from '../../controllers/champFiche.controller';
const CheckSchema = checkSchema;
/* GET fiches listing. */
router.get('/', champFicheController.getAllChampsFR);

/* ADD new fiche */
router.post('/add/:id', validate(CheckSchema(ChampFicheFRS)), champFicheController.addChampFR);

/* UPDATE fiche infos */
router.put('/update/:id', champFicheController.updateChampFR);

/* DELETE fiche */
router.delete('/delete/:id', champFicheController.deleteChampFR);

/* GET fiche owner */
//router.get('/:id', champFicheController.getEmploye);

export { router as champFRRouter };
