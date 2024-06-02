import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    color: {
      type: String,
    },
    font: {
      type: String,
    },
    archived: {
      type: Boolean,
    },
    deleted: {
      type: Boolean,
      default: false,
    },
    pinned: {
      type: Boolean,
      default: false,
    },
    expireAt: Date,
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);
NoteSchema.index({ expireAt: 1 }, { expireAfterSeconds: 0 });
export default mongoose.model("Note", NoteSchema);
