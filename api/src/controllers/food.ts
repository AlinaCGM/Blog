// Food Item controller

import { Request, Response } from "express";
import Food from "../models/Food";

import FoodServices from "../services/food";

//1: Get Controller
export const getFoodListController = async (req: Request, res: Response) => {
  try {
    const foodList = await FoodServices.getFoodList();
    res.json(foodList);
  } catch (error) {
    console.log(error);
  }
};

export const updateIngredientsController = async (
  req: Request,
  res: Response
) => {
  try {
    const { foodId, ingredients } = req.body;

    // Update the ingredients field using findOneAndUpdate
    const updatedFoodItem = await Food.findOneAndUpdate(
      { _id: foodId },
      { ingredients: ingredients },
      { new: true } // Return the updated document
    );

    if (!updatedFoodItem) {
      return res.status(404).json({ error: "Food item not found" });
    }

    res.json(updatedFoodItem);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An unknown error occurred" });
    }
  }
};

export const addRateToFoodController = async (req: Request, res: Response) => {
  try {
    const { foodId, rate } = req.body;

    const updatedFoodItem = await FoodServices.addRateToFood(foodId, rate);
    if (!updatedFoodItem) {
      return res.status(404).json({ error: "Food item not found." });
    }

    res.json(updatedFoodItem);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An unknown error occurred." });
    }
  }
};

export const getRateByFoodIdController = async (
  req: Request,
  res: Response
) => {
  try {
    const { foodId } = req.params;

    const rate = await FoodServices.getRateByFoodId(foodId);
    if (rate === null) {
      return res.status(404).json({ error: "Food item not found." });
    }

    res.json({ rate });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An unknown error occurred." });
    }
  }
};

export const getFoodByIdController = async (req: Request, res: Response) => {
  try {
    const foundFood = await FoodServices.getFoodById(req.params.id);
    res.json(foundFood);
  } catch (error) {
    console.log(error);
  }
};

export const createFoodController = async (req: Request, res: Response) => {
  try {
    console.log(req.body, "Data received from client");
    const { title, ingredients, description, image, category } = req.body;

    // create a new Mongoose document
    const newFoodItem = new Food({
      title: title,
      ingredients: ingredients,
      description: description,
      image: image,
      category: category,
    });

    console.log(newFoodItem);

    const foodItem = await FoodServices.createFood(newFoodItem);
    res.json(foodItem);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An unknown error occurred" });
    }
  }
};

//3: Delete Controller
export const deleteFoodByIdController = async (req: Request, res: Response) => {
  try {
    const deleteFoodItem = await FoodServices.deleteFoodById(req.params.id);
    res.json(deleteFoodItem);
  } catch (error) {
    console.log(error);
  }
};

//4: Update Controller
export const updateFoodByIdController = async (req: Request, res: Response) => {
  try {
    const updateFoodItem = await FoodServices.updateFoodById(
      req.params.id,
      req.body
    );
    res.json(updateFoodItem);
  } catch (error) {
    console.log(error);
  }
};
