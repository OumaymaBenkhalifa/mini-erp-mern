import mongoose, { Schema } from 'mongoose';
import { Document } from 'mongoose';
import { IUser, User } from '../models/user.model';
import { IChamp } from '../models/champFacture.model';
interface IFac {
  date: Date;
  total: number;
  echeance: Date;
  client: IUser;
  champFacture: Array<IChamp>;
}

export interface IFacture extends Document {
  date: Date;
  total: number;
  echeance: Date;
  client: IUser;
  champFacture: Array<IChamp>;
}
export interface IFactureDoc extends IFacture, Document {}
interface IFactureModel extends mongoose.Model<IFacture> {
  build(attrs: IFac): IFacture;
}
const factureSchema = {
  date: {
    type: Date,
    isRequired: true,
    notEmpty: true,
    errorMessage: 'date field should not be empty',
    matches: {
      // eslint-disable-next-line
      options: [/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/],
      errorMessage: 'Please enter a date form yyyy-mm-dd or yyyy-m-d',
    },
    isDate: { negated: false, errorMessage: 'invalid date' },
  },
  total: {
    type: Number,
    isRequired: true,
    isNumeric: true,
    errorMessage: 'please enter a number',
  },
  client: {
    ref: 'User',
    type: mongoose.Schema.Types.ObjectId,
  },
  echeance: {
    type: Date,
    isRequired: true,
    notEmpty: true,
    errorMessage: 'invalid date',
    matches: {
      // eslint-disable-next-line
      options: [/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/],
      errorMessage: 'Please enter a date form yyyy-mm-dd or yyyy-m-d',
    },
    isDate: true,
  },
  champFacture: [
    {
      ref: 'Champ',
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
};

const FactureSchema = new Schema<IFacture>(factureSchema);
FactureSchema.statics.build = (attrs: IFac) => {
  return new Facture(attrs);
};

const Facture = mongoose.model<IFacture, IFactureModel>('Facture', FactureSchema);
export { factureSchema, Facture };
