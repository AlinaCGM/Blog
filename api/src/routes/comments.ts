import { Router } from "express";
import passport from "passport";
import AdminCheck from "../middlewares/adminCheck";

import {
  getCommentsByUserIdController,
  getAllCommentsController,
  createCommentController,
  deleteCommentByIdController,
  getCommentsByFoodIdController,
} from "../controllers/comments";

const commentRouter = Router();

commentRouter.get(
  "/:userId",
  passport.authenticate("jwt", { session: false }),
  getCommentsByUserIdController
);

commentRouter.get("/:foodId", getCommentsByFoodIdController);

commentRouter.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  AdminCheck,
  getAllCommentsController
);
commentRouter.post(
  "/:foodId",
  passport.authenticate("jwt", { session: false }),
  createCommentController
);
commentRouter.post(
  "/:foodId",
  passport.authenticate("google-id-token", { session: false }),
  createCommentController
);
commentRouter.delete(
  "/:commentId",
  passport.authenticate("jwt", { session: false }),
  AdminCheck,
  deleteCommentByIdController
);

export default commentRouter;
