import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    titulli: {
      type: String,
      required: true,
    },

    pershkrimi: {
      type: String,
      required: true,
    },

    kategoria: {
      type: String,
      required: true,
    },

    vendndodhja: {
      type: String,
      required: true,
    },

    data: {
      type: Date,
      required: true,
    },

    cmimi: {
      type: Number,
      required: true,
    },

    vendeDisponueshme: {
      type: Number,
      required: true,
    },

    foto: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const Event = mongoose.model("Event", eventSchema);

export default Event;
