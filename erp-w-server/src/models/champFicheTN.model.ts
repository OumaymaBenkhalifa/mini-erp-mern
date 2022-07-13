import mongoose, { Schema } from 'mongoose';
import { IFicheTN } from './fichePaix.model';

export interface IChampFicheTN extends Document {
  libelle: string;
  nombre?: number;
  gains?: number;
  retenues?: number;
  Fiche: IFicheTN;
}
interface IChampFicheTNModel extends mongoose.Model<IChampFicheTN> {
  build(attrs: IChampFicheTN): IChampFicheTN;
}

const ChampFicheTNS = {
  libelle: {
    type: String,
    required: true,
  },
  nombre: {
    type: Number,
    isNumeric: true,
    errorMessage: 'please enter a number',
  },
  gains: {
    type: Number,
    isNumeric: true,
    errorMessage: 'please enter a number',
  },
  retenues: {
    type: Number,
    isNumeric: true,
    errorMessage: 'please enter a number',
  },
  Fiche: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'FicheTN',
  },
};
const ChampFicheTNSchema = new Schema<IChampFicheTN>(ChampFicheTNS);
ChampFicheTNSchema.statics.build = (attrs: IChampFicheTN) => {
  return new ChampFicheTN(attrs);
};
const ChampFicheTN = mongoose.model<IChampFicheTN, IChampFicheTNModel>('ChampFicheTN', ChampFicheTNSchema);
export { ChampFicheTN, ChampFicheTNS, ChampFicheTNSchema };
