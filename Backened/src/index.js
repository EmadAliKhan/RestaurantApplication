import { app } from "./app.js";
import connectDB from "./db/DB.js";
import dotenv from "dotenv";
dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log("server is running on port", PORT);
    });
  })
  .catch((error) => {
    console.log("mongoDB connection failed....", error);
  });
