import { Facture } from '../models/facture.model';
import { Champ } from '../models/champFacture.model';
import AppLogger from '../logger/app.logger';
import { Request, Response, NextFunction } from 'express';

export const getAllChamps = async (req, res) => {
  try {
    const champ = await Champ.find();
    return res.send(champ);
  } catch (err) {
    res.send('pas de champs');
  }
};

export const addChamp = async (req: Request, res: Response) => {
  const fact = await Facture.findOne({ _id: req.params.id });

  if (fact) {
    const total = req.body.coutUnitaire * req.body.quantite;
    const champ = new Champ({
      description: req.body.description,
      coutUnitaire: req.body.coutUnitaire,
      facture: fact,
      quantite: req.body.quantite,
      montant: total,
    });
    champ.populate('facture');
    try {
      const savedchamp = await champ.save();
      fact.champFacture.push(savedchamp);
      fact.save();
      res.send(savedchamp);
    } catch (err) {
      res.status(400).send('il y a une erreur');
    }
  } else {
    res.status(400).send('pas de facture avec cet id');
  }
};

export const getFacture = async (req, res) => {
  const foundchamp = await Champ.find({ _id: req.params.id }).populate('facture');
  res.json(foundchamp[0].facture);
};

export const updateChamp = async (req, res) => {
  const champ = await Champ.findOne({ _id: req.params.id });
  const facture = await Facture.findOne({ _id: champ?.facture._id });

  if (champ) {
    Champ.updateOne(
      { _id: champ._id },
      {
        description: req.body.description,
        coutUnitaire: req.body.coutUnitaire,
        quantite: req.body.quantite,
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

export const deleteChamp = async (req, res) => {
  const champ = await Champ.findOne({ _id: req.params.id });
  if (champ) {
    await Champ.deleteOne({ _id: champ._id });
    const facture = await Facture.findOne({ _id: champ.facture._id });
    const ind = facture?.champFacture.indexOf(champ);
    if (ind) facture?.champFacture.splice(ind, 1);
    facture?.save();
    return res.status(200).send('champ deleted');
  } else {
    return res.status(404).send('no champ with id: ' + req.params.id);
  }
};
