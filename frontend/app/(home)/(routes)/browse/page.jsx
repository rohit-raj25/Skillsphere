"use client";
import react, { useEffect, useState } from "react";
import CategoryFilter from "../../_components/CategoryFilter";
import CourseCard from "../../_components/CourseCard";
import axios from "axios";

const Browse = () => {
  const [courseList, setCourseList] = useState([]);

  useEffect(() => {
    const getCourses = async () => {
      try {
        const response = await axios.get("/api/courses");
        console.log(response.data);
        const courses = response.data.data;
        setCourseList([...courses]);
      } catch (error) {
        console.error(error);
      }
    };
    getCourses();
  }, []);

  return (
    <div>
      <CategoryFilter />
      <div className="flex flex-wrap gap-10">
        {courseList.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Browse;
