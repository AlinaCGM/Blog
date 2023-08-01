import { UserType } from "./userType";
export type CommentType = {
  _id: string;
  userId: string;
  foodId: string;
  message: string;
  date: Date;
  rate: number;
  isConfirmed: boolean;
};
export type UserCommentType = {
  userId: string;
  message: string;
};
export type CommentWithUserType = Omit<CommentType, "userId"> & {
  userId: UserType;
};
