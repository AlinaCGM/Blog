import Express from "express";
import cors from "cors";
import foodRouter from "./routes/food";
import userRouter from "./routes/users";
import commentRouter from "./routes/comments";
import passport from "passport";
import { jwtStrategy, googleStrategy } from "./config/passport";

const app = Express();
app.use(Express.json());
app.use(
  cors({
    origin: "https://blog-client-wz90.onrender.com",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // Allow sending cookies with requests
  })
);
app.use(passport.initialize());
passport.use(jwtStrategy);
passport.use(googleStrategy);

app.use("/food", foodRouter);
app.use("/users", userRouter);
app.use("/comments", commentRouter);

export default app;
