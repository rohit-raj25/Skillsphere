import express from "express";
import multer from "multer";
import { Course } from "../models/courseModel.js";
const router = express.Router();

const upload = multer({ dest: "images/" });

//Route to create course
router.post("/", upload.single("thumbnail"), async (req, res) => {
  try {
    console.log(req.body);
    const newCourse = await Course.create(req.body.courseInfo);
    res.status(201).send(newCourse);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

//Route to geat all courses
router.get("/", async (req, res) => {
  try {
    const courses = await Course.find({});
    res.send({
      count: courses.length,
      data: courses,
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

//Route to get a course by id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const course = await Course.findById(id);
    res.send({
      course,
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

//Route to update a course by id
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Course.findByIdAndUpdate(id, req.body);
    if (!result) {
      return res.status(404).json({ message: "course not found" });
    }
    return res.status(200).send({
      message: "course updated successfully",
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

//Route to delete a course
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Course.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ message: "course not found" });
    }
    return res.status(200).send({
      message: "course deleted successfully",
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

export default router;
