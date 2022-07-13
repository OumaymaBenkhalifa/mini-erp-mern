import { User } from '../models/user.model';
import { FicheFR } from '../models/fichePaix.model';
import { FicheTN } from '../models/fichePaix.model';
import { Champ } from '../models/champFacture.model';
import { Request, Response, NextFunction } from 'express';

//get all fiches FR
export const getAllfichesFR = async (req, res) => {
  try {
    const fiches = await FicheFR.find().sort('dateDebut').exec();
    return res.send(fiches);
  } catch (err) {
    res.send('no fiches yet');
  }
};

export const getFicheFRByEmployee = async (req, res) => {
  const employee = await User.findOne({email: req.params.email});
  if (employee) {
    try {
    const fiches = await FicheFR.find({beneficiaire: employee}).sort('dateDebut').exec();
    return res.send(fiches);
  } catch (err) {
    res.send('no fiches yet');
  }} else {
    res.send('no employee with such email');
  }
};


//add ficheFR
export const addFicheFR = async (req: Request, res: Response) => {
  const beneficiaire = await User.findOne({ email: req.body.email });
  const fiches = await FicheFR.find();
  let exist = false;
  const { dateDebut, dateFin, postOccupe, matricule, numSecuriteSocial, netPaye, email } = req.body;
  if (beneficiaire) {
    fiches.forEach(function (fiche) {
      if (
        String(fiche.dateDebut) == String(new Date(dateDebut)) &&
        String(fiche.dateFin) == String(new Date(dateFin)) &&
        String(fiche.beneficiaire) == String(beneficiaire._id)
      ) {
        exist = true;
      }
    });
    if (!exist) {
      const ficheFr = new FicheFR({
        dateDebut: new Date(dateDebut),
        dateFin: new Date(dateFin),
        postOccupe: postOccupe,
        matricule: matricule,
        numSecuriteSocial: numSecuriteSocial,
        netPaye: netPaye,
        beneficiaire: beneficiaire,
      });
      ficheFr.populate('beneficiaire');
      try {
        const savedFicheFr = await ficheFr.save();
        beneficiaire.ficheDePaixFR?.push(savedFicheFr);
        beneficiaire.save();
        res.send(savedFicheFr);
      } catch (err) {
        res.status(400).send('il y a une erreur');
      }
    } else {
      res.status(400).send('fiche déjà existante');
    }
  } else {
    res.status(400).send('pas d employe avec cette adresse email');
  }
};

//update ficheFR
export const updateFicheFR = async (req, res) => {
  const fiche = await FicheFR.findOne({ _id: req.params.id });
  const { dateDebut, dateFin, postOccupe, matricule, numSecuriteSocial, netPaye } = req.body;
  if (fiche) {
    const beneficiaire = await User.findOne({ _id: fiche.beneficiaire._id });
    FicheFR.updateOne(
      { _id: fiche._id },
      {
        dateDebut: new Date(dateDebut),
        dateFin: new Date(dateFin),
        postOccupe: postOccupe,
        matricule: matricule,
        numSecuriteSocial: numSecuriteSocial,
        netPaye: netPaye,
      },
      function (err, data) {
        if (err) {
          return res.status(400).send('erreur');
        } else {
          return res.status(200).send('fiche updated successfully');
        }
      },
    );

    try {
      await fiche.save();
      if (beneficiaire?.ficheDePaixFR) {
        const index = beneficiaire?.ficheDePaixFR.indexOf(fiche);
        if (index) {
          if (!beneficiaire?.ficheDePaixFR[index]) {
            await beneficiaire?.ficheDePaixFR?.push(fiche);
            await beneficiaire?.save();
          }
        }
      }
      //res.send(savedfiche);
    } catch (err) {
      res.status(400);
    }
  } else {
    return res.status(400).send('email introuvable');
  }
};

//delete ficheFR
export const deleteficheFR = async (req, res) => {
  const fiche = await FicheFR.findOne({ _id: req.params.id });
  if (fiche) {
    await FicheFR.deleteOne({ _id: fiche._id });
    if (fiche.ChampFiche) {
      fiche.ChampFiche.forEach(async (champ) => {
        await Champ.deleteOne({ _id: champ });
      });
    }
    const user = await User.findOne({ _id: fiche.beneficiaire._id });
    const id = fiche._id;
    const ind = user?.ficheDePaixFR?.indexOf(fiche);
    if (ind) {
      user?.ficheDePaixFR?.splice(ind, 1);
      user?.save();
    }

    return res.status(200).send('fiche deleted');
  } else {
    return res.status(404).send('no fiche with id: ' + req.params.id);
  }
};

//get all fiches TN
export const getAllfichesTN = async (req, res) => {
  try {
    const fiches = await FicheTN.find().sort('dateDebut').exec();
    return res.send(fiches);
  } catch (err) {
    res.send('no fiches yet');
  }
};

export const getFicheTNByEmployee = async (req, res) => {
  const employee = await User.findOne({email: req.params.email});
  if (employee) {
    try {
    const fiches = await FicheTN.find({beneficiaire: employee}).sort('dateDebut').exec();
    return res.send(fiches);
  } catch (err) {
    res.send('no fiches yet');
  }} else {
    res.send('no employee with such email');
  }
};
//add FicheTN
export const addFicheTN = async (req: Request, res: Response) => {
  const beneficiaire = await User.findOne({ email: req.body.email });
  const fiches = await FicheTN.find();
  let exist = false;
  const { dateDebut, dateFin, postOccupe, matricule, numSecuriteSocial, netPaye, email } = req.body;
  if (beneficiaire) {
    fiches.forEach(function (fiche) {
      if (
        String(fiche.dateDebut) == String(new Date(dateDebut)) &&
        String(fiche.dateFin) == String(new Date(dateFin)) &&
        String(fiche.beneficiaire) == String(beneficiaire._id)
      ) {
        exist = true;
      }
    });
    if (!exist) {
      const ficheTn = new FicheTN({
        dateDebut: new Date(dateDebut),
        dateFin: new Date(dateFin),
        postOccupe: postOccupe,
        matricule: matricule,
        numSecuriteSocial: numSecuriteSocial,
        netPaye: netPaye,
        beneficiaire: beneficiaire,
      });
      ficheTn.populate('beneficiaire');
      try {
        const savedFicheTn = await ficheTn.save();
        beneficiaire.ficheDePaixTN?.push(savedFicheTn);
        beneficiaire.save();
        res.send(savedFicheTn);
      } catch (err) {
        res.status(400).send('il y a une erreur');
      }
    } else {
      res.status(400).send('fiche déjà existante');
    }
  } else {
    res.status(400).send('pas d employe avec cette adresse email');
  }
};

//update ficheTN
export const updateFicheTN = async (req, res) => {
  const fiche = await FicheTN.findOne({ _id: req.params.id });
  const { dateDebut, dateFin, postOccupe, matricule, numSecuriteSocial, netPaye } = req.body;
  if (fiche) {
    const beneficiaire = await User.findOne({ _id: fiche.beneficiaire._id });
    console.log(fiche);
    FicheTN.updateOne(
      { _id: fiche._id },
      {
        dateDebut: new Date(dateDebut),
        dateFin: new Date(dateFin),
        postOccupe: postOccupe,
        matricule: matricule,
        numSecuriteSocial: numSecuriteSocial,
        netPaye: netPaye,
      },
      function (err, data) {
        if (err) {
          return res.status(400).send('erreur');
        } else {
          return res.status(200).send('fiche updated successfully');
        }
      },
    );

    try {
      await fiche.save();
      if (beneficiaire?.ficheDePaixTN) {
        const index = beneficiaire?.ficheDePaixTN.indexOf(fiche);
        if (index) {
          if (!beneficiaire?.ficheDePaixTN[index]) {
            await beneficiaire?.ficheDePaixTN?.push(fiche);
            await beneficiaire?.save();
          }
        }
      }
      //res.send(savedfiche);
    } catch (err) {
      res.status(400);
    }
  } else {
    return res.status(400).send('email introuvable');
  }
};

//delete ficheTN
export const deleteficheTN = async (req, res) => {
  const fiche = await FicheTN.findOne({ _id: req.params.id });
  if (fiche) {
    await FicheTN.deleteOne({ _id: fiche._id });
    if (fiche.ChampFiche) {
      fiche.ChampFiche.forEach(async (champ) => {
        await Champ.deleteOne({ _id: champ });
      });
    }
    const user = await User.findOne({ _id: fiche.beneficiaire._id });
    const id = fiche._id;
    const ind = user?.ficheDePaixTN?.indexOf(fiche);
    if (ind) {
      user?.ficheDePaixTN?.splice(ind, 1);
      user?.save();
    }

    return res.status(200).send('fiche deleted');
  } else {
    return res.status(404).send('no fiche with id: ' + req.params.id);
  }
};
