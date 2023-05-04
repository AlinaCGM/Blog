import Comment, { CommentDocument } from "../models/Comment";

const createComment = async (
  comment: CommentDocument
): Promise<CommentDocument> => {
  return comment.save();
};

const getCommentsByUserId = async (
  userIdRequest: string
): Promise<CommentDocument[]> => {
  return Comment.find({ userId: userIdRequest }).populate("userId");
};

const getCommentsByFoodId = async (
  foodId: string
): Promise<CommentDocument[]> => {
  return Comment.find({ foodId: foodId });
};

const getAllComments = async (): Promise<CommentDocument[]> => {
  return Comment.find();
};

const deleteCommentById = async (
  id: string
): Promise<CommentDocument | null> => {
  const foundComment = Comment.findByIdAndDelete(id);
  return foundComment;
};

export default {
  createComment,
  getCommentsByUserId,
  getAllComments,
  deleteCommentById,
  getCommentsByFoodId,
};
