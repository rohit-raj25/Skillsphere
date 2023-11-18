"use client";
import { useState } from "react";

const CategoryFilter = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const filterOptions = [
    {
      id: 1,
      name: "All",
      value: "all",
    },
    {
      id: 2,
      name: "React js",
      value: "React",
    },
    {
      id: 3,
      name: "Next js  ",
      value: "nextjs",
    },
    {
      id: 4,
      name: "TailwindCss",
      value: "tailwindcss",
    },

    {
      id: 5,
      name: "Firebase",
      value: "firebase",
    },
    {
      id: 6,
      name: "Add Course",
      value: "add course",
    },
  ];
  return (
    <div className="flex gap-5">
      {filterOptions.map((item, index) => (
        <button
          key={index}
          onClick={() => setActiveIndex(index)}
          className={`border p-2 px-4 text-sm rounded-md hover:border-purple-800 hover:bg-purple-300 font-semibold
          ${
            activeIndex == index
              ? "border-purple-800 bg-purple-200 text-purple-800"
              : null
          }`}
        >
          <h2>{item.name}</h2>
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
