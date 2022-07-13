import { User } from '../models/user.model';
import { Facture } from '../models/facture.model';
import { Champ } from '../models/champFacture.model';
import { Request, Response, NextFunction } from 'express';

export const getFactureByClient = async (req,res) => {
  const cl=await User.findOne({email: req.params.email});
    if(cl) {
  try {
    const factures = await Facture.find({client: cl});
    return res.send(factures);
  } catch (err) {
    res.send('no factures for this client');
  }} else {    res.send('no client with such email');
}
  
}

export const getAllfactures = async (req, res) => {
  try {
    const factures = await Facture.find().sort('date').exec();
    return res.send(factures);
  } catch (err) {
    res.send('no factures yet');
  }
};

export const addfacture = async (req: Request, res: Response) => {
  const cl = await User.findOne({ email: req.body.email });
  const factures = await Facture.find().sort('date').exec();
  let exist = false;
  const d = new Date(req.body.date);
  if (cl) {
    factures.forEach(function (fact) {
      if (
        fact.total == req.body.total &&
        String(fact.date) == String(new Date(req.body.date)) &&
        String(fact.client) == String(cl._id) &&
        String(fact.echeance) == String(new Date(req.body.echeance))
      ) {
        exist = true;
      }
    });
    const date = new Date(req.body.date);
    const total = Number(req.body.total);
    const client = cl;
    const echeance = new Date(req.body.echeance);
    const champFacture = [];
    if (!exist) {
      const facture = new Facture({
        date: date,
        total: total,
        client: client,
        echeance: echeance,
        champFacture :  champFacture
      })
      facture.populate('client');
      try {
        const savedFacture = await facture.save();
        cl.factures?.push(savedFacture);
        cl.save();
        res.send(savedFacture);
      } catch (err) {
        res.status(400).send('il y a une erreur');
      }
    } else {
      res.status(400).send('facture déjà existante');
    }
  } else {
    res.status(400).send('pas de client avec cette adresse email');
  }
};

export const getClient = async (req, res) => {
  const foundFacture = await Facture.find({ _id: req.params.id }).populate('client');
  res.json(foundFacture[0].client);
};

//update facture
export const updatefacture = async (req, res) => {
  const facture = await Facture.findOne({ _id: req.params.id });
  if (facture) {
    const Client = await User.findOne({ _id: facture.client._id });
    Facture.updateOne(
      { _id: facture._id },
      {
        date: new Date(req.body.date),
        total: req.body.total,
        echeance: new Date(req.body.echeance),
      },
      function (err, data) {
        if (err) {
          return res.status(400).send('erreur');
        } else {
          return res.status(200).send('facture updated successfully');
        }
      },
    );
    /*if (user && req.body.email != user.email) {
      const ind = user.factures?.indexOf(facture.id);
      if (ind) {
        await user.factures?.splice(ind, 1);
        await user?.save();
      }
    }*/
    try {
      await facture.save();
      if (Client?.factures) {
        const index = Client?.factures.indexOf(facture._id);
        if (index) {
          if (!Client?.factures[index]) {
            await Client?.factures?.push(facture);
            await Client?.save();
          }
        }
      }
      //res.send(savedfacture);
    } catch (err) {
      res.status(400);
    }
  } else {
    return res.status(400).send('email introuvable');
  }
};

//delete facture
export const deletefacture = async (req, res) => {
  const facture = await Facture.findOne({ _id: req.params.id });
  if (facture) {
    await Facture.deleteOne({ _id: facture._id });
    if (facture.champFacture) {
      facture.champFacture.forEach(async (champ) => {
        await Champ.deleteOne({ _id: champ });
      });
    }
    const user = await User.findOne({ _id: facture.client._id });
    const ind = user?.factures?.indexOf(facture._id);
    if (ind) {
      user?.factures?.splice(ind, 1);
      user?.save();
    }

    return res.status(200).send('facture deleted');
  } else {
    return res.status(404).send('no facture with id: ' + req.params.id);
  }
};
