import mongoose, { Document } from "mongoose";
import Food from "./Food";
import User from "./User";

export type CommentDocument = Document & {
  userId: string;
  foodId: string;
  message: string;
  date: Date;
  rate: number;
  isConfirmed: boolean;
};

const CommentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
  },
  foodId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Food,
  },
  message: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  rate: {
    type: Number,
    default: 5,
  },
  isConfirmed: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model<CommentDocument>("Comment", CommentSchema);
