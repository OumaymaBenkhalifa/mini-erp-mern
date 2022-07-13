import { ChampFicheFR } from '../models/champFicheFR.model';
import { ChampFicheTN } from '../models/champFicheTN.model';
import { FicheFR } from '../models/fichePaix.model';
import { FicheTN } from '../models/fichePaix.model';
import { Request, Response, NextFunction } from 'express';

//get champs fiche FR
export const getAllChampsFR = async (req, res) => {
  try {
    const champ = await ChampFicheFR.find();
    return res.send(champ);
  } catch (err) {
    res.send('pas de champs');
  }
};

//add champ FR
export const addChampFR = async (req: Request, res: Response) => {
  const fiche = await FicheFR.findOne({ _id: req.params.id });
  const { libelle, baseSalariale, taux, basePatronale, tauxPatronal } = req.body;

  if (fiche) {
    const salariale = (baseSalariale * taux) / 100;
    const patronal = (basePatronale * tauxPatronal) / 100;
    const champ = new ChampFicheFR({
      libelle: libelle,
      baseSalariale: baseSalariale,
      taux: taux,
      resultatSalarial: salariale,
      basePatronale: basePatronale,
      tauxPatronal: tauxPatronal,
      resultatPatronal: patronal,
      Fiche: fiche,
    });
    champ.populate('Fiche');
    try {
      const savedchamp = await champ.save();
      fiche?.ChampFiche?.push(savedchamp);
      fiche.save();
      res.send(savedchamp);
    } catch (err) {
      res.status(400).send('il y a une erreur');
    }
  } else {
    res.status(400).send('pas de fiche avec cet id');
  }
};

export const getFicheFR = async (req, res) => {
  const foundchamp = await ChampFicheFR.find({ _id: req.params.id }).populate('Fiche');
  res.json(foundchamp[0].Fiche);
};

//update Champ FR
export const updateChampFR = async (req, res) => {
  const champ = await ChampFicheFR.findOne({ _id: req.params.id });
  const fiche = await FicheFR.findOne({ _id: champ?.Fiche });
  const { libelle, baseSalariale, taux, basePatronale, tauxPatronal } = req.body;

  if (champ) {
    const salariale = (baseSalariale * taux) / 100;
    const patronal = (basePatronale * tauxPatronal) / 100;
    ChampFicheFR.updateOne(
      { _id: champ._id },
      {
        libelle: libelle,
        baseSalariale: baseSalariale,
        taux: taux,
        resultatSalarial: salariale,
        basePatronale: basePatronale,
        tauxPatronal: tauxPatronal,
        resultatPatronal: patronal,
      },
      function (err, data) {
        if (err) {
          return res.status(400).send('erreur');
        } else {
          return res.status(200).send('champ updated successfully');
        }
      },
    );
    try {
      await champ.save();
    } catch (err) {
      res.status(400);
    }
  } else {
    return res.status(400).send('champ introuvable');
  }
};

//delete champ FR
export const deleteChampFR = async (req, res) => {
  const champ = await ChampFicheFR.findOne({ _id: req.params.id });
  if (champ) {
    await ChampFicheFR.deleteOne({ _id: champ._id });
    const fiche = await FicheFR.findOne({ _id: champ.Fiche });
    const ind = fiche?.ChampFiche?.indexOf(champ);
    if (ind) fiche?.ChampFiche?.splice(ind, 1);
    fiche?.save();
    return res.status(200).send('champ deleted');
  } else {
    return res.status(404).send('no champ with id: ' + req.params.id);
  }
};

//get champs fiche TN
export const getAllChampsTN = async (req, res) => {
  try {
    const champ = await ChampFicheTN.find();
    return res.send(champ);
  } catch (err) {
    res.send('pas de champs');
  }
};

//add champ TN
export const addChampTN = async (req: Request, res: Response) => {
  const fiche = await FicheTN.findOne({ _id: req.params.id });
  const { libelle, nombre, gains, retenues } = req.body;

  if (fiche) {
    const champ = new ChampFicheTN({
      libelle: libelle,
      nombre: nombre,
      gains: gains,
      retenues: retenues,
      Fiche: fiche,
    });
    champ.populate('Fiche');
    try {
      const savedchamp = await champ.save();
      fiche?.ChampFiche?.push(savedchamp);
      fiche.save();
      res.send(savedchamp);
    } catch (err) {
      res.status(400).send('il y a une erreur');
    }
  } else {
    res.status(400).send('pas de fiche avec cet id');
  }
};

export const getFicheTN = async (req, res) => {
  const foundchamp = await ChampFicheTN.find({ _id: req.params.id }).populate('Fiche');
  res.json(foundchamp[0].Fiche);
};

//update Champ TN
export const updateChampTN = async (req, res) => {
  const champ = await ChampFicheTN.findOne({ _id: req.params.id });
  const fiche = await FicheTN.findOne({ _id: champ?.Fiche });
  const { libelle, nombre, gains, retenues } = req.body;

  if (champ) {
    ChampFicheTN.updateOne(
      { _id: champ._id },
      {
        libelle: libelle,
        nombre: nombre,
        gains: gains,
        retenues: retenues,
      },
      function (err, data) {
        if (err) {
          return res.status(400).send('erreur');
        } else {
          return res.status(200).send('champ updated successfully');
        }
      },
    );
    try {
      await champ.save();
    } catch (err) {
      res.status(400);
    }
  } else {
    return res.status(400).send('champ introuvable');
  }
};

//delete champ TN
export const deleteChampTN = async (req, res) => {
  const champ = await ChampFicheTN.findOne({ _id: req.params.id });
  if (champ) {
    await ChampFicheTN.deleteOne({ _id: champ._id });
    const fiche = await FicheTN.findOne({ _id: champ.Fiche });
    const ind = fiche?.ChampFiche?.indexOf(champ);
    if (ind) fiche?.ChampFiche?.splice(ind, 1);
    fiche?.save();
    return res.status(200).send('champ deleted');
  } else {
    return res.status(404).send('no champ with id: ' + req.params.id);
  }
};
