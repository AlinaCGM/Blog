import Food, { FoodDocument } from "../models/Food";

export const createFood = async (food: FoodDocument): Promise<FoodDocument> => {
  console.log(food, "Data before saving");

  return food.save();
};

export const addRateToFood = async (
  foodId: string,
  rate: number
): Promise<FoodDocument | null> => {
  try {
    const foodItem = await Food.findById(foodId);
    if (!foodItem) {
      return null; // Food item not found
    }

    // Calculate the new average rate based on existing rate and user-provided rate
    const newTotalRate = (foodItem.rate + rate) / 2;
    foodItem.rate = newTotalRate;
    await foodItem.save();

    return foodItem;
  } catch (error) {
    throw error;
  }
};
export const getRateByFoodId = async (
  foodId: string
): Promise<number | null> => {
  try {
    const foodItem = await Food.findById(foodId);
    if (!foodItem) {
      return null; // Food item not found
    }

    return foodItem.rate;
  } catch (error) {
    throw error;
  }
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
  addRateToFood,
  getRateByFoodId,
};
