import StarRating from "./StarRating";
const CourseDescription = ({ rating }) => {
  return (
    <>
      <div className="bg-slate-800 w-full h-96 border-orange-600">
        <div className="p-7 w-[60%] ">
          <h1 className="font-bold line-clamp-2 break-normal text-white leading-9 text-3xl">
            Complete javascript Bootcamp from Zero to Advanced in one year of
            the school
          </h1>
          <h3 className=" line-clamp-2 break-normal text-white pt-2 font-semibold">
            Master javascript by building 100 projects in 100 days. Learn data
            science, automation, build websites, games and apps!
          </h3>
          <div className="px-3 ml-2 mt-2 py-1 w-24 bg-center bg-purple-500 pointer">
            <button className="text-sm font-semibold">Bestseller</button>
          </div>

          <div className="px-2 py-0  font-bold flex gap-1">
            <span className="text-l bg-center">{rating}</span>
            <span className="bg-center ">
              <StarRating rating={rating} />
            </span>
            <span className="font-medium font-sans text-sm text-slate-500">{`(123,456)`}</span>
          </div>
        </div>
        <div className=""></div>
      </div>
    </>
  );
};

export default CourseDescription;
