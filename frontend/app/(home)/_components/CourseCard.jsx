import React from "react";
import Image from "next/image";
import StarRating from "./StarRating";
import { IndianRupee } from "lucide-react";

const CourseCard = ({ rating }) => {
  return (
    <div className="   ml-10 mt-7 border-none   rounded  h-80 w-80 ">
      <div className="p-2 bg-cover">
        <Image
          src="/awie.avif"
          alt="logo"
          width={200}
          height={90}
          className="w-full h-40"
        />
      </div>
      <div className="px-2">
        <h3>
          <a href="#" className="font-bold line-clamp-2 break-normal">
            Complete javascript Bootcamp from Zero to Advanced in one year of
            the school
          </a>
        </h3>
      </div>
      <div className="px-2 ">
        <h6 className="font-medium font-sans text-sm text-slate-500">
          Rohit raj
        </h6>
      </div>
      <div className="px-2 py-0  font-bold flex gap-1">
        <span className="text-l bg-center">{rating}</span>
        <span className="bg-center ">
          <StarRating rating={rating} />
        </span>
        <span className="font-medium font-sans text-sm text-slate-500">{`(123,456)`}</span>
      </div>
      <div className="px-2 py-0  font-bold flex ">
        {/* <IndianRupee size={20} strokeWidth={2} /> */}
        <span className="text-xl bg-center ml-0">{`₹389`}</span>
        <span className="font-medium font-sans text-sm text-slate-500 ml-2 underline-from-middle ">{`3867`}</span>
      </div>
      <div className="px-3 ml-2 py-1 w-24 bg-center bg-purple-500 pointer">
        <button className="text-sm font-semibold">Bestseller</button>
      </div>
    </div>
  );
};

export default CourseCard;
