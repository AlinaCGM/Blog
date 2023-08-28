import mongoose, { Document } from "mongoose";

export type FoodDocument = Document & {
  title: string;
  description: string;
  category: string;
  image: string;
  status: boolean;
  DOB: Date;
  rate: number;
  ingredients: [String];
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
  category: {
    type: String,
    required: true,
    default: "tasty",
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
    default: 0,
  },
  ingredients: {
    type: [String],
    required: true,
  },
});

const Food = mongoose.model<FoodDocument>("Food", FoodSchema);

export default Food;
