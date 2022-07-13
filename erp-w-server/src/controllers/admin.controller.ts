import { User, UserSchema } from '../models/user.model';
import { Facture } from '../models/facture.model';
import { Request, Response, NextFunction } from 'express';

export const getAllUsers = async (req, res) => {
  const user = await User.find().sort('date').exec();
  return res.send(user);
};

export const getUserByEmail = async (req, res) => {
  const user = await User.findOne({ email: req.params.email });
  if (user) {
    return res.status(200).send(user);
  } else {
    return res.status(400).send('no user with email:' + req.params.email);
  }
};

export const addUser = async (req: Request, res: Response) => {
  //check if email exists
  const currentUser = await User.findOne({ email: req.body.email });
  if (currentUser) return res.status(400).send('Email already exists');

  const user = new User(req.body);

  /*const user = new User({
    nom: req.body.nom,
    prenom: req.body.prenom,
    role: req.body.role,
    email: req.body.email,
    password: req.body.password,
    factures: Array(),
  });*/
  try {
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (err) {
    res.status(400);
  }
};

export const updateUser = async (req, res) => {
  const user = await User.findOne({ email: req.params.email });
  if (user) {
    User.updateOne(
      { _id: user._id },
      { nom: req.body.nom, prenom: req.body.prenom, password: req.body.password },
      function (err, data) {
        if (err) {
          return res.status(400).send('erreur');
        } else {
          return res.status(200).send('user updated successfully');
        }
      },
    );

    try {
      await user.save();
      // res.send(savedUser);
    } catch (err) {
      res.status(400);
    }
  } else {
    return res.status(400).send('email introuvable');
  }
};

export const deleteUser = async (req, res) => {
  const user = await User.findOne({ email: req.params.email });
  if (user) {
    await User.deleteOne({ email: user.email });
    if (user.factures) {
      user.factures.forEach(async (facture) => {
        await Facture.deleteOne({ _id: facture });
      });
    }
    return res.status(200).send('user deleted');
  } else {
    return res.status(404).send('no user with email: ' + req.params.email);
  }
};
