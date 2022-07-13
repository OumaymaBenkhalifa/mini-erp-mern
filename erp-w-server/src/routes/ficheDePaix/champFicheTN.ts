const express = require('express');
const router = express.Router();
import { ChampFicheTNS } from '../../models/champFicheTN.model';
import { validate } from '../../schemas/validateSchema';
const { checkSchema } = require('express-validator');
import * as champFicheController from '../../controllers/champFiche.controller';
const CheckSchema = checkSchema;
/* GET fiches listing. */
router.get('/', champFicheController.getAllChampsTN);

/* ADD new fiche */
router.post('/add/:id', validate(CheckSchema(ChampFicheTNS)), champFicheController.addChampTN);

/* UPDATE fiche infos */
router.put('/update/:id', champFicheController.updateChampTN);

/* DELETE fiche */
router.delete('/delete/:id', champFicheController.deleteChampTN);

/* GET fiche owner */
//router.get('/:id', champFicheController.getEmploye);

export { router as champTNRouter };
