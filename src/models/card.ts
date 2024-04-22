import { Document, model, Schema } from 'mongoose';
// sudo /home/usuario/mongodb/bin/mongod --dbpath /home/usuario/mongodb-data/

interface CardDocumentInterface extends Document {
  id: number;
  name: string;
  mana_cost: number;
  color: string;
  type_line: string;
  rarity: string;
  rules: string;
  market_price: number;
  strength?: number;
  resistance?: number;
  loyalty?: number;
}

const CardSchema = new Schema<CardDocumentInterface>({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  mana_cost: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    required: true,
    trim: true,
    enum: ['white', 'blue', 'black', 'red', 'green', 'multicolor', 'colorless'],
  },
  type_line: {
    type: String,
    required: true,
    trim: true,
    enum : ['creature', 'enchantment', 'artifact', 'instant', 'sorcery', 'planeswalker', 'land'],
  },
  rarity: {
    type: String,
    required: true,
    trim: true,
    enum: ['common', 'uncommon', 'rare', 'mythic_rare'],
  },
  rules: {
    type: String,
    required: true,
    trim: true,
  },
  market_price: {
    type: Number,
    required: true,
  },
  strength: {
    type: Number,
  },
  resistance: {
    type: Number,
  },
  loyalty: {
    type: Number,
  },
});

export const Card = model<CardDocumentInterface>('Card', CardSchema);
