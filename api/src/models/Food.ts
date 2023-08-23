import mongoose, { Document } from "mongoose";

export type FoodDocument = Document & {
  title: string;
  description: string;
  category: string;
  image: string;
  status: boolean;
  DOB: Date;
  rate: number;
  ingredients: string;
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
    type: String,
    required: true,
  },
});

// export default mongoose.model<FoodDocument>("Food", FoodSchema);

const Food = mongoose.model<FoodDocument>("Food", FoodSchema); // Import your Food model

// const updateDocuments = async () => {
//   try {
//     const documents = await Food.find();

//     for (const document of documents) {
//       // Update the document to match the new schema
//       document.ingredients = document.ingredients || document.ingredients;
//       await document.save();
//     }

//     console.log("Migration completed successfully.");
//   } catch (error) {
//     console.error("Migration error:", error);
//   }
// };

// updateDocuments();

export default Food;
