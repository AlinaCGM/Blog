import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./app";

dotenv.config();
const port = 8000;
mongoose
  .connect(process.env.MONGODB_URL as string)
  .then(() => {
    app.listen(port, () =>
      console.log(`The server is running on http://localhost:${port}`)
    );
  })
  .catch((error: Error) => {
    console.log(
      `MongoDB connection error. Please make sure MongoDB is running. ${error}`
    );
    process.exit(1);
  });
console.log(process.env);
