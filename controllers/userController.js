import { StatusCodes } from "http-status-codes";
import userModel from "../models/userModel.js";
import noteModel from "../models/noteModel.js";
import cloudinary from "cloudinary";
import fs from "fs";
import { BadRequestError } from "../errors/customError.js";
import { randomOTPGenerator } from "../utils/randomOTPGenerator.js";

export const getCurrentUser = async (req, res) => {
  const user = await userModel.findById(req.user.userId);
  const userWithoutPassword = user.toJSON();
  res.status(StatusCodes.OK).json({ user: userWithoutPassword });
};
export const getApplicationStats = async (req, res) => {
  const users = await userModel.countDocuments();
  const notes = await noteModel.countDocuments();
  res.status(StatusCodes.OK).json({ users, notes });
};
// export const uploadImageLocal = async (req, res) => {
//   if (!req.files) throw new BadRequestError("No file uploaded");
//   const image = req.files.image;
//   if (!image.mimetype.startsWith("image"))
//     throw new BadRequestError("Please upload image");
//   const maxFileSize = 1024 * 1024;
//   if (image.size > maxFileSize)
//     throw new BadRequestError("Please upload image smaller than 1MB");
//   const __filename = fileURLToPath(import.meta.url);
//   const __dirname = path.dirname(__filename);
//   const imagePath = path.join(
//     __dirname,
//     "../public/uploads/" + `${image.name}`
//   );
//   await image.mv(imagePath);
//   res.json({ img: { src: `/uploads/${image.name}` } });
// };
export const uploadImage = async (req, res) => {
  const { tempFilePath, size } = req.files.image;
  const { name } = await userModel.findById(req.user.userId);
  if (size > 1024 * 1024) {
    throw new BadRequestError("Image size should be less than 1MB");
  }
  try {
    const result = await cloudinary.v2.uploader.upload(tempFilePath, {
      filename_override: name.concat("_profile_pic"),
      folder: "notes_v2_users",
    });
    return res
      .status(StatusCodes.OK)
      .json({ image: { src: result.secure_url } });
  } catch (error) {
    throw new BadRequestError(error.message);
  } finally {
    fs.unlinkSync(tempFilePath);
  }
};
export const updateUser = async (req, res) => {
  const updateValues = { ...req.body };
  // delete updateValues.password;
  const updatedUser = await userModel.findByIdAndUpdate(
    req.user.userId,
    updateValues,
    { new: true }
  );
  res.status(StatusCodes.OK).json({ updatedUser });
};

export const resetPassword = async (req, res) => {
  const { email } = await userModel.findById(req.user.userId);
  const otp = randomOTPGenerator();
  res.json({});
};
