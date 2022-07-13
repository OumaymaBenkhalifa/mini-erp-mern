import express from 'express';
import { userRouter } from './user/user';
import { authRouter } from './login/auth';
import { factureRouter } from './facture/facture';
import { champRouter } from './facture/champFacture';
import { ficheFRRouter } from './ficheDePaix/ficheFR';
import { ficheTNRouter } from './ficheDePaix/ficheTN';
import { champFRRouter } from './ficheDePaix/champFicheFR';
import { champTNRouter } from './ficheDePaix/champFicheTN';

const router = express.Router();

router.use('/user', userRouter);
router.use('/auth', authRouter);
router.use('/facture', factureRouter);
router.use('/facture/champ', champRouter);
router.use('/ficheFR', ficheFRRouter);
router.use('/ficheTN', ficheTNRouter);
router.use('/ficheFR/champ', champFRRouter);
router.use('/ficheTN/champ', champTNRouter);

export { router as appRouter };
