import Food, { FoodDocument } from "../models/Food";

export const createFood = async (food: FoodDocument): Promise<FoodDocument> => {
  try {
    return await food.save();
  } catch (error) {
    console.error("Error saving food:", error);
    throw error;
  }
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

    // Log values to debug
    console.log("Current food item rate:", foodItem.rate);
    console.log("Provided rate:", rate);

    // Handle potential undefined rate in FoodDocument
    const currentRate = typeof foodItem.rate === "number" ? foodItem.rate : 0;

    const newRate = (currentRate + rate) / 2;

    // Check for NaN before saving
    if (isNaN(newRate)) {
      throw new Error("Computed rate is invalid.");
    }

    foodItem.rate = newRate;
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
