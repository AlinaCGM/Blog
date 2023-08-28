// Comments Controller: logic to deal with request and response

import { Request, Response } from "express";

import Comment from "../models/Comment";
import commentServices from "../services/comments";

//1: Get Controller
export const getCommentsByUserIdController = async (
  req: Request,
  res: Response
) => {
  try {
    const commentList = await commentServices.getCommentsByUserId(
      req.params.userId
    );
    res.json(commentList);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error getting comments by user ID" });
  }
};

export const getCommentsByFoodIdController = async (
  req: Request,
  res: Response
) => {
  try {
    const commentList = await commentServices.getCommentsByFoodId(
      req.params.foodId
    );
    res.json(commentList);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error getting comments by food ID" });
  }
};

export const getAllCommentsController = async (req: Request, res: Response) => {
  try {
    const commentList = await commentServices.getAllComments();
    res.json(commentList);
  } catch (error) {
    console.log(error);
  }
};

//2: Post Controller
export const createCommentController = async (req: Request, res: Response) => {
  try {
    // We'll get comment here from FrontEnd | Client
    // comment function|Collection|table import from Model
    const { userId, message } = req.body;
    if (!userId) {
      return res.status(401).json({ message: "Authentication required" });
    }
    const newComment = new Comment({
      userId: userId,
      foodId: req.params.foodId,
      message: message,
    });

    // New comment will save in DB via services and that comment will return as well
    const comment = await commentServices.createComment(newComment);

    // Response back to Frontend
    res.json(comment);
  } catch (error) {
    console.log(error);
  }
};

// 3: Delete Controller
export const deleteCommentByIdController = async (
  req: Request,
  res: Response
) => {
  try {
    const deleteComment = await commentServices.deleteCommentById(
      req.params.commentId
    );
    res.json(deleteComment);
  } catch (error) {
    console.log(error);
  }
};
