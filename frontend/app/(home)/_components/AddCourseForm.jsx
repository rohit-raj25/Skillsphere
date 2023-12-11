"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const AddCourseForm = ({ setCourseModalOpen }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [teacher, setTeacher] = useState("");
  const [price, setPrice] = useState("");
  const [banner, setBanner] = useState();
  const [totalChapters, setTotalChapters] = useState("");
  const [free, setFree] = useState(false);

  useEffect(() => {
    const getUsers = async () => {
      const response = await axios("/api");
      console.log(response.data);
    };

    getUsers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const courseInfo = {
        name,
        description,
        teacher,
        price,
        banner,
        totalChapters,
        free,
      };
      let formData = new FormData();
      formData.append("thumbnail", banner);
      formData.append("courseInfo", courseInfo);

      const response = await axios.post("/api/courses", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("Course created successfully");
      // Reset form fields
      setName("");
      setDescription("");
      setTeacher("");
      setPrice("");
      setBanner("");
      setTotalChapters("");
      setFree(false);
      setCreatedAt("");
      setUpdatedAt("");
      setCourseModalOpen(false);
      Window.location.reload();
    } catch (error) {
      console.error("Failed to create course", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} action="#" className="p-4 md:p-5 ">
      <div className="grid gap-4 mb-4 grid-cols-2">
        <div className="col-span-2">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Name:
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Type Course name"
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          />
        </div>
        <div className="flex gap-40 ">
          <div className="col-span-1 ">
            <label
              htmlFor="price"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Price:
            </label>
            <input
              type="number"
              value={price}
              placeholder="$2999"
              className="bg-gray-50 border border-gray-300 w-40 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block  p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              id="price"
              onChange={(e) => {
                const newPrice = parseInt(e.target.value);
                if (newPrice >= 0) {
                  setPrice(newPrice);
                }
              }}
              required
            />
          </div>

          <div className="col-span-2   ">
            <label className=" mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Chapters:
            </label>
            <input
              type="number"
              value={totalChapters}
              onChange={(e) => {
                const newChapter = parseInt(e.target.value);
                if (newChapter >= 0) {
                  setTotalChapters(newChapter);
                }
              }}
              required
              className="bg-gray-50 border border-gray-300 w-40 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block  p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            />
          </div>
        </div>

        <div className="col-span-2">
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Description:
          </label>
          <textarea
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write Course description here"
          />
        </div>

        <div className="col-span-2">
          <label
            htmlFor="banner"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Banner:
          </label>
          <input
            type="file"
            accept="image/*"
            filename={banner}
            onChange={(e) => setBanner(e.target.files[0])}
            className="bg-gray border-dashed border-2  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          />
        </div>

        <div className="col-span-2 ">
          <label
            htmlFor="teacher"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Teacher:
          </label>
          <input
            type="text"
            value={teacher}
            onChange={(e) => setTeacher(e.target.value)}
            placeholder="Teacher"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            required
          />
        </div>
      </div>

      <button
        type="submit"
        className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <svg
          className="me-1 -ms-1 w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
            clipRule="evenodd"
          ></path>
        </svg>
        Add new Course
      </button>
    </form>
  );
};

export default AddCourseForm;
