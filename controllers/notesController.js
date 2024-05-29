import { StatusCodes } from "http-status-codes";
import noteModel from "../models/noteModel.js";

// GET ALL NOTES
export const getAllNotes = async (req, res) => {
  const { userId } = req.user;
  let deleted = req.query.deleted;
  deleted = deleted ? JSON.parse(deleted) : false;
  req.query.deleted = deleted;
  const sort = req.query.sort;
  let notes;
  if (sort) {
    delete req.query.sort;
    notes = await noteModel
      .find({ createdBy: userId, ...req.query })
      .sort(sort)
      .limit(10);
  } else notes = await noteModel.find({ createdBy: userId, ...req.query });
  res.status(StatusCodes.OK).json({ notes });
};
// CREATE NOTE
export const createNote = async (req, res) => {
  const { userId, role } = req.user;
  req.body.createdBy = userId;
  const note = await noteModel.create(req.body);
  res.status(StatusCodes.CREATED).json({ msg: "note added", note });
};
// GET SINGLE NOTE
export const getSingleNote = async (req, res) => {
  const note = await noteModel.findById(req.params.id);
  res.status(StatusCodes.OK).json({ note });
};
// EDIT NOTE
export const editNote = async (req, res) => {
  const deleted = req.body.deleted && JSON.parse(req.body.deleted);
  if (deleted) {
    // BIN - Automatic delete after 30 days
    // req.body.expireAt = new Date(new Date().getTime() + 10000);
    req.body.expireAt = new Date(new Date().getTime() + 30 * 86400 * 1000);
  }
  const { id } = req.params;
  const note = await noteModel.findById(id);
  if (!deleted && note.expireAt) {
    req.body.expireAt = null;
  }
  const updatedNote = await noteModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(StatusCodes.OK).json({ updatedNote });
};
// DELETE NOTE
export const deleteNote = async (req, res) => {
  const note = await noteModel.findByIdAndDelete(req.params.id);
  res.status(StatusCodes.OK).json({ note });
};
