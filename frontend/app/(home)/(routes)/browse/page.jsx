import react from "react";
import CategoryFilter from "../../_components/CategoryFilter";
import CourseCard from "../../_components/CourseCard";

const Browse = () => {
  return (
    <div>
      <CategoryFilter />
      <div className="flex flex-wrap gap-10">
        <CourseCard rating={4} />
        <CourseCard rating={4.5} />
        <CourseCard rating={4.5} />
        <CourseCard rating={4.5} />
        <CourseCard rating={4.5} />
        <CourseCard rating={4.5} />
      </div>
    </div>
  );
};

export default Browse;
