// process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
import "express-async-errors";
import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import notesRouter from "./routers/notesRouter.js";
import authRouter from "./routers/authRouter.js";
import mongoose from "mongoose";
import { errorHandlerMiddleware } from "./middleware/errorHandlerMiddleware.js";
import { authenticateUser } from "./middleware/authMiddleware.js";
import userRouter from "./routers/userRouter.js";
import expressFileUpload from "express-fileupload";
import cloudinary from "cloudinary";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

dotenv.config();
const app = express();

// MIDDLEWARE
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.resolve(__dirname, "./public")));
app.use(express.json());
app.use(cookieParser(process.env.JWT_SECRET));
app.use(morgan("dev"));
app.use(expressFileUpload({ useTempFiles: true }));

// CLOUDINARY(V2)
cloudinary.v2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

// HOME ROUTE
app.get("/", (req, res) => {
  res.status(200).json({ msg: "hello world" });
});
app.get("/api/v1/test", (req, res) => {
  res.status(200).json({ msg: "hello world" });
});

// ROUTES
app.use("/api/v1/notes", authenticateUser, notesRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", authenticateUser, userRouter);

// FRONTEND
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./public", "index.html"));
});

// NOT FOUND MIDDLEWARE
app.use("*", (req, res) => {
  res.status(404).send("not found");
});

// ERROR HANDLER MIDDLEWARE
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;
try {
  await mongoose.connect(process.env.MONGO_URI);
  app.listen(port, () => {
    console.log("server is listening on port 5000...");
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
