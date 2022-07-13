import mongoose from 'mongoose';
import { Facture, IFacture } from '../models/facture.model';

export interface IChamp extends Document {
  description: string;
  coutUnitaire: number;
  facture: IFacture;
  quantite: number;
  montant: number;
}
interface IChampModel extends mongoose.Model<IChamp> {
  build(attrs: IChamp): IChamp;
}
const champSchema = new mongoose.Schema<IChamp>({
  description: {
    type: String,
    required: true,
  },
  coutUnitaire: {
    type: Number,
    required: true,
    isNumeric: true,
    errorMessage: 'please enter a number',
  },
  facture: {
    ref: 'Facture',
    type: mongoose.Schema.Types.ObjectId,
  },
  quantite: {
    type: Number,
    required: true,
    isInt: true,
    errorMessage: 'please enter an integer',
  },
  montant: {
    type: Number,
    required: true,
    isNumeric: true,
    errorMessage: 'please enter a number',
  },
});

champSchema.statics.build = (attrs: IChamp) => {
  return new Champ(attrs);
};

const Champ = mongoose.model<IChamp, IChampModel>('Champ', champSchema);
export { champSchema, Champ };
