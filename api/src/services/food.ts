import Food, { FoodDocument } from "../models/Food";

export const createFood = async (food: FoodDocument): Promise<FoodDocument> => {
  return food.save();
};

const getFoodList = async (): Promise<FoodDocument[]> => {
  return Food.find();
};

const getFoodById = async (id: string): Promise<FoodDocument | null> => {
  return Food.findById(id);
};

const deleteFoodById = async (id: string): Promise<FoodDocument | null> => {
  return Food.findByIdAndDelete(id);
};

const updateFoodById = async (
  id: string,
  update: Partial<FoodDocument>
): Promise<FoodDocument | null> => {
  return Food.findByIdAndUpdate(id, update, { new: true });
};

export default {
  createFood,
  getFoodList,
  getFoodById,
  deleteFoodById,
  updateFoodById,
};
