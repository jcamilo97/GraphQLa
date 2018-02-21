import * as mongoose from 'mongoose';

export const VampireSchema = new mongoose.Schema({
  name: String,
  age: Number,
  clan: String,
});