import Express from "express";
import cors from "cors";
import foodRouter from "./routes/food";
import userRouter from "./routes/users";
import commentRouter from "./routes/comments";
import passport from "passport";
import { jwtStrategy, googleStrategy } from "./config/passport";

const app = Express();
app.use(Express.json());
app.use(cors());
app.use(passport.initialize());
passport.use(jwtStrategy);
passport.use(googleStrategy);

app.use("/food", foodRouter);
app.use("/users", userRouter);
app.use("/comments", commentRouter);

export default app;
