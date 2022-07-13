import mongoose, { Schema } from 'mongoose';
import { IFicheFR } from './fichePaix.model';

export interface IChampFicheFR extends Document {
  libelle: string;
  baseSalariale?: number;
  taux?: number;
  resultatSalarial?: number;
  basePatronale?: number;
  tauxPatronal?: number;
  resultatPatronal?: number;
  Fiche: IFicheFR;
}
interface IChampFicheFRModel extends mongoose.Model<IChampFicheFR> {
  build(attrs: IChampFicheFR): IChampFicheFR;
}

const ChampFicheFRS = {
  libelle: {
    type: String,
    required: true,
  },
  baseSalariale: {
    type: Number,
    required: true,
    isNumeric: true,
    errorMessage: 'please enter a number',
  },
  taux: {
    type: Number,
    required: true,
    isNumeric: true,
    errorMessage: 'please enter a number',
  },
  resultatSalarial: {
    type: Number,
  },
  basePatronale: {
    type: Number,
    isNumeric: true,
    errorMessage: 'please enter a number',
  },
  tauxPatronal: {
    type: Number,
    isNumeric: true,
    errorMessage: 'please enter a number',
  },
  resultatPatronal: {
    type: Number,
  },
  Fiche: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'FicheFR',
  },
};
const ChampFicheFRSchema = new Schema<IChampFicheFR>(ChampFicheFRS);

ChampFicheFRSchema.statics.build = (attrs: IChampFicheFR) => {
  return new ChampFicheFR(attrs);
};
const ChampFicheFR = mongoose.model<IChampFicheFR, IChampFicheFRModel>('ChampFicheFR', ChampFicheFRSchema);
export { ChampFicheFR, ChampFicheFRS, ChampFicheFRSchema };
