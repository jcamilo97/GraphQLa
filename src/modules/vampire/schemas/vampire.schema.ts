import * as mongoose from 'mongoose';

export const VampireSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  age: Number,
  clan: String,
});