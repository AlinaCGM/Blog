import { Request, Response, NextFunction } from "express";
import { UserDocument } from "../models/User";

const adminCheck = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = req.user as UserDocument;
    // console.log(req,'request');
    if (user.isAdmin === true) {
      next();
      return true;
    } else {
      res.json({ message: "you dont have access!" });
      return false;
    }
  } catch (error) {
    console.log(error);
  }
};

export default adminCheck;
