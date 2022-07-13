import mongoose from 'mongoose';
import { Document, Schema } from 'mongoose';
import Bcrypt from 'bcryptjs';
import { IFacture } from './facture.model';
import { IFiche, IFicheFR, IFicheTN } from './fichePaix.model';
const bcrypt = Bcrypt;
const enumValues = require('mongoose-enumvalues');

enum Role {
  SUPER = 'superAdmin',
  ADMIN = 'admin',
  CLIENT = 'client',
  EMPLOYE = 'employe',
}

interface IUser extends Document {
  nom: string;
  prenom: string;
  role: Role;
  email: string;
  password: string;
  factures?: Array<IFacture>;
  date?: Date;
  ficheDePaixTN?: Array<IFicheTN>;
  ficheDePaixFR?: Array<IFicheFR>;
}
interface IUserModel extends mongoose.Model<IUser> {
  build(attrs: IUser): IUser;
}

const UserS = {
  nom: {
    type: String,
    isRequired: true,
    isLength: {
      errorMessage: 'name should be at least 3 chars long',
      // Multiple options would be expressed as an array
      options: { min: 3 },
    },
    isAlpha: {
      negated: false,
      errorMessage: 'name has to be alphabetic',
    },
  },
  prenom: {
    type: String,
    isLength: {
      errorMessage: 'name should be at least 3 chars long',
      // Multiple options would be expressed as an array
      options: { min: 3 },
    },
    isAlpha: {
      negated: false,
      errorMessage: 'name has to be alphabetic',
    },
  },
  role: {
    type: String,
    enum: {
      values: [Role.SUPER, Role.ADMIN, Role.CLIENT, Role.EMPLOYE],
    },
    /*matches: {
      options: [/\b(?:superAdmin|admin|client|employe)\b/],
      errorMessage: 'Invalid role',
    },*/
    //enum: ['superAdmin', 'admin', 'client', 'employe'],
  },

  email: {
    type: String,
    isEmail: {
      bail: true,
      errorMessage: 'invalid email format',
    },
  },
  password: {
    type: String,
    isLength: {
      errorMessage: 'Password should be at least 7 chars long',
      // Multiple options would be expressed as an array
      options: { min: 7 },
    },
  },
  date: {
    type: Date,
    default: Date.now,
  },
  factures: [
    {
      ref: 'Facture',
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
  ficheDePaixFR: [
    {
      ref: 'FicheFR',
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
  ficheDePaixTN: [
    {
      ref: 'FicheTN',
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
};
const UserSchema = new Schema<IUser>(UserS);
UserSchema.statics.build = (attrs: IUser) => {
  return new User(attrs);
};

UserSchema.pre('save', async function (next) {
  /*if (!(this.isNew || this.isModified('password'))) {
    console.log(this);
    next();
  }*/
  if (this.password) {
    const salt = await bcrypt.genSalt(10);
    //hash password
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
  }
});

//const User = mongoose.model('User', userSchema);
UserSchema.plugin(enumValues);

const User = mongoose.model<IUser, IUserModel>('User', UserSchema);

export { User, IUser, UserSchema };
