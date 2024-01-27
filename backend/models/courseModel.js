import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  teacher: {
    type: String,
    required: true,
  },
  ratings: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    required: true,
  },
  banner: {
    type: String,
    required: false,
  },
  totalChapters: {
    type: Number,
    required: true,
  },
  free: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Number,
    required: false,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export const Course = mongoose.model("Course", courseSchema);
