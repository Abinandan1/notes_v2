import { Router } from "express";
import {
  createNote,
  deleteNote,
  editNote,
  getAllNotes,
  getSingleNote,
} from "../controllers/notesController.js";
import {
  validateIdParam,
  validateNoteInput,
} from "../middleware/validationMiddleware.js";

const router = Router();

router.route("/").get(getAllNotes).post(validateNoteInput, createNote);
router
  .route("/:id")
  .get(validateIdParam, getSingleNote)
  .patch(validateIdParam, editNote)
  .delete(validateIdParam, deleteNote);

export default router;
