"use client";
import { useState } from "react";
import AddCourseModal from "./AddCourseModal";

const AddCourse = () => {
  const [courseModalOpen, setCourseModalOpen] = useState(false);
  return (
    <>
      <div
        className=" p-2 px-4 text-sm rounded-md hover:border-purple-800 hover:bg-purple-300 font-semibold cursor-pointer ml-56  "
        onClick={() => setCourseModalOpen(!courseModalOpen)}
      >
        AddCourse
      </div>
      {courseModalOpen && (
        <AddCourseModal setCourseModalOpen={setCourseModalOpen} />
      )}
    </>
  );
};

export default AddCourse;
