import mongoose, { Document } from "mongoose";

// console.log(result.nModified);
export type FoodDocument = Document & {
  title: string;
  description: string;
  category: string;
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
    default: 5,
  },
});

// export default mongoose.model<FoodDocument>("Food", FoodSchema);

const Food = mongoose.model<FoodDocument>("Food", FoodSchema);

const updateDocs = async () => {
  const result = await Food.updateMany(
    { category: { $exists: false } },
    { $set: { category: "tasty" } }
  );
  console.log(result);
};

updateDocs();

export default Food;
