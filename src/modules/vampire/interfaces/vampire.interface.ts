import { Document } from 'mongoose';

export interface Vampire extends Document {
  readonly _id: number;
  readonly name: string;
  readonly age: number;
  readonly clan: string;
}