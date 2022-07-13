import mongoose, { Schema } from 'mongoose';
import { IUser } from './user.model';
import { IChampFicheTN } from './champFicheTN.model';
import { IChampFicheFR } from './champFicheFR.model';

export interface IFiche extends Document {
  dateDebut: Date;
  dateFin: Date;
  postOccupe: string;
  matricule: string;
  numSecuriteSocial: number;
  netPaye: number;
  beneficiaire: IUser;
}
/*interface IFicheModel extends mongoose.Model<IFiche> {
  build(attrs: IFiche): IFiche;
}*/
interface IFicheTNModel extends mongoose.Model<IFicheTN> {
  build(attrs: IFicheTN): IFicheTN;
}
interface IFicheFRModel extends mongoose.Model<IFicheFR> {
  build(attrs: IFicheFR): IFicheFR;
}
export interface IFicheTN extends IFiche {
  ChampFiche?: Array<IChampFicheTN>;
}

export interface IFicheFR extends IFiche {
  ChampFiche?: Array<IChampFicheFR>;
}

const ficheS = {
  dateDebut: {
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
  dateFin: {
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
  postOccupe: {
    type: String,
    isRequired: true,
    notEmpty: true,
    errorMessage: 'posteOccupe field should not be empty',
  },
  matricule: {
    type: String,
    isRequired: true,
    notEmpty: true,
    errorMessage: 'matricule field should not be empty',
  },
  numSecuriteSocial: {
    type: Number,
    isRequired: true,
    isInt: true,
    errorMessage: 'numero should be integer',
  },
  netPaye: {
    type: Number,
  },
  beneficiaire: {
    ref: 'User',
    type: mongoose.Schema.Types.ObjectId,
  },
};
const ficheSchema = new Schema<IFiche>(ficheS);

const ficheTNSchema = new Schema<IFicheTN>({
  ChampFiche: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'champFicheTN',
    },
  ],
});
ficheTNSchema.statics.build = (attrs: IFicheTN) => {
  return new FicheTN(attrs);
};
const ficheFRSchema = new Schema<IFicheFR>({
  ChampFiche: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'champFicheFR',
    },
  ],
});

const Fiche = mongoose.model<IFiche>('Fiche', ficheSchema);
//const FicheTN = mongoose.model<IFicheTN, IFicheTNModel>('FicheTN', ficheTNSchema);
const FicheTN = Fiche.discriminator<IFicheTN, mongoose.Model<IFicheTN>>('FicheTN', ficheTNSchema);
const FicheFR = Fiche.discriminator<IFicheFR, mongoose.Model<IFicheFR>>('FicheFR', ficheFRSchema);
// const FicheFR = mongoose.model<IFicheFR>('FicheFR',ficheFRSchema);

export { FicheTN, FicheFR, ficheTNSchema, ficheFRSchema, ficheS };
