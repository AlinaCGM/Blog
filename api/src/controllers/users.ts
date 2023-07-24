// User Controller: logic to deal with request and response

import { Request, Response } from "express";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import User, { UserDocument } from "../models/User";

import UserServices from "../services/users";
import generateToken from "../utils/generateToken";

//1: Get (User) Controller
export const getUserListController = async (req: Request, res: Response) => {
  try {
    const userList = await UserServices.getUserList();
    res.json(userList);
  } catch (error) {
    console.log(error);
  }
};

export const getUserByIdController = async (req: Request, res: Response) => {
  try {
    const foundUser = await UserServices.getUserById(req.params.id);
    // if (!foundUser) {
    //   res.json({ message: `cant find user ${req.body.email}` });
    // }
    // return;
    res.json(foundUser);
  } catch (error) {
    console.log(error);
  }
};

//2: Post (User) Controller
export const createUserController = async (req: Request, res: Response) => {
  try {
    // We'll get user here from FrontEnd | Client
    // User function | Collection import from Model
    const { firstName, lastName, email, password } = req.body;
    //hash password
    const saltRounds = await bcrypt.genSalt(10); //complexity of the password
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    console.log(hashedPassword);
    const newUser = new User({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: hashedPassword,
    });

    // New user will save in DB via services and that user will return as well
    const user = await UserServices.createUser(newUser);

    // Response back to Frontend
    if (user !== "available") res.json(user) && res.status(200);
    else res.json({ message: "You have already registered with this email!" });
  } catch (error) {
    console.log(error);
  }
};
dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET as string;
export const logInWithPassword = async (req: Request, res: Response) => {
  try {
    // get user information from DB and make token (with jsonwebtoken packages)
    const userData = await UserServices.findUserByEmail(req.body.email);
    if (!userData) {
      res.json({
        message: "invalid",
      });
      return;
    }
    //compare password form login form and hashed password from DB
    const passwordFromForm = req.body.password;
    const passwordFromDB = userData.password;
    const match = await bcrypt.compare(passwordFromForm, passwordFromDB);
    if (!match) {
      res.json({ message: "wrong password!" });
      return;
    }

    const token = generateToken(userData._id, req.body.email);
    res.json({ userData, token });
  } catch (error) {
    console.log(error);
  }
};
//3: Delete Controller
export const deleteUserByIdController = async (req: Request, res: Response) => {
  try {
    const deleteUser = await UserServices.deleteUserById(req.params.id);
    res.json(deleteUser);
  } catch (error) {
    console.log(error);
  }
};

//4: Update Controller
export const updateUserByIdController = async (req: Request, res: Response) => {
  try {
    const updateUser = await UserServices.updateUserById(
      req.params.id,
      req.body
    );
    res.json(updateUser);
  } catch (error) {
    console.log(error);
  }
};
//google part
export const googleAuthenticate = async (req: Request, res: Response) => {
  try {
    // access the data from passport :done (null, user)
    console.log(req, "request");
    const userData = req.user as UserDocument;
    if (!userData) {
      res.json({ message: "Can't find user with the email!" });
      return;
    }
    const token = generateToken(req.body.email, userData.firstName);
    res.json({ token, userData });
  } catch (error) {
    console.log(error);
  }
};
