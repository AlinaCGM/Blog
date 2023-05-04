import mongoose, { Document } from "mongoose";

export type FoodDocument = Document & {
  title: string;
  description: string;
  image: string;
  status: boolean;
  DOB: Date;
  rate: number;
};

const FoodSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    default: true,
  },
  DOB: {
    type: Date,
    default: Date.now(),
  },
  rate: {
    type: Number,
    default: 5,
  },
});

export default mongoose.model<FoodDocument>("Food", FoodSchema);
