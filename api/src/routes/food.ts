// food router here
import { Router } from "express";
import passport from "passport";
import AdminCheck from "../middlewares/adminCheck";
import {
  getFoodListController,
  createFoodController,
  deleteFoodByIdController,
  updateFoodByIdController,
  getFoodByIdController,
  addRateToFoodController,
  getRateByFoodIdController,
} from "../controllers/food";

const foodRouter = Router();

// Call Express Methods for food Collection by foodRouter
foodRouter.get("/", getFoodListController);
foodRouter.get("/get/:foodId", getFoodByIdController);
foodRouter.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  AdminCheck,
  createFoodController
);
foodRouter.post(
  "/addRate/:foodId",
  passport.authenticate("jwt", { session: false }),
  addRateToFoodController
);
foodRouter.get("/getRate/:foodId", getRateByFoodIdController);
foodRouter.post(
  "/",
  passport.authenticate("google-id-token", { session: false }),
  AdminCheck,
  createFoodController
);
foodRouter.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  AdminCheck,
  deleteFoodByIdController
);
foodRouter.put(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  AdminCheck,
  updateFoodByIdController
);

export default foodRouter;
