// FirstPage.jsx
import React from "react";
import { useForm } from "react-hook-form";
import QuestionImageCard from "../QuestionCards/QuestionImageCard";
import { useState } from "react";
import Q1Image1 from "../../../assets/images/Family/Q1/1.png";
import Image from '../../../assets/images/selectionPage/aaa.png'

const FirstPage = ({ formData, setFormData }) => {
  const { register } = useForm();
  // const color = "bg-gradient-to-br from-sky-300 to-sky-300";
  const color = "bg-white";
  const borderColor = "border-inherit"

  const question1 = "01. What is the value of 6 x 4  x 2?";
  const question2 = "02. What is the perimeter of a rectangle with length 8 cm and width 5 cm?";
  const question3 = "03. What is the quotient of 48 ÷ 6?";
  const question4 = "04. What is the sum of the interior angles of a triangle?";
  const question5 = "05. What is the value of 5 x 8 + 3?";

  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const handleAnswerSelect = (questionIndex, answerText) => {
    setSelectedAnswer(answerText);
    const questionKey = `question${questionIndex}`;
    setFormData((prevData) => ({
      ...prevData,
      [questionKey]: answerText,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <form>
       
        {/* Question 01 */}
        <div className={`py-10 p-6 font-short-stack rounded-3xl shadow-md mb-2 bg-white ${borderColor}`}>
          <div className="mb-4">
            <label className="block text-xl font-semibold mb-2">
              {question1}
            </label>
            <div className="flex items-center space-x-8">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="favoriteSibling"
                  value="Yes"
                  {...register("question1")}
                  onChange={handleChange}
                  className="appearance-none h-8 w-8 border border-sky-700 rounded-full checked:bg-sky-500 checked:border-transparent focus:outline-none"
                />
                <span className="ml-2 text-xl">43</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="favoriteSibling"
                  value="No"
                  {...register("question1")}
                  onChange={handleChange}
                  className="appearance-none h-8 w-8 border border-gray-700 rounded-full checked:bg-sky-500 checked:border-transparent focus:outline-none"
                />
                <span className="ml-2 text-xl">48</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="favoriteSibling"
                  value="Nutural"
                  {...register("question1")}
                  onChange={handleChange}
                  className="appearance-none h-8 w-8 border border-gray-700 rounded-full checked:bg-sky-500 checked:border-transparent focus:outline-none"
                />
                <span className="ml-2 text-xl">28</span>
              </label>
            </div>
          </div>
        </div>

        {/* Question 02 */}
        <div className={`bg-white font-short-stack p-6 py-10 rounded-3xl shadow-md mb-12  ${borderColor}`}>
          <div className="mb-4">
            <label className="block text-xl font-semibold mb-2">
              {question2}
            </label>
            <div className="flex items-center space-x-8">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="favoriteSibling"
                  value="Yes"
                  {...register("question2")}
                  onChange={handleChange}
                  className="appearance-none h-8 w-8 border border-sky-700 rounded-full checked:bg-sky-500 checked:border-transparent focus:outline-none"
                />
                <span className="ml-2 text-xl">26cm</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="favoriteSibling"
                  value="No"
                  {...register("question2")}
                  onChange={handleChange}
                  className="appearance-none h-8 w-8 border border-gray-700 rounded-full checked:bg-sky-500 checked:border-transparent focus:outline-none"
                />
                <span className="ml-2 text-xl">48cm</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="favoriteSibling"
                  value="Nutural"
                  {...register("question2")}
                  onChange={handleChange}
                  className="appearance-none h-8 w-8 border border-gray-700 rounded-full checked:bg-sky-500 checked:border-transparent focus:outline-none"
                />
                <span className="ml-2 text-xl">28cm</span>
              </label>
            </div>
          </div>
        </div>

        {/* Question 03 */}
        <div className={` bg-white font-short-stack py-10 p-6 rounded-3xl shadow-md mb-12  ${borderColor}` }>
          <div className="mb-4">
            <label className="block text-xl font-semibold mb-2">
              {question3}
            </label>
            <div className="flex items-center space-x-8">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="favoriteSibling"
                  value="Yes"
                  {...register("question3")}
                  onChange={handleChange}
                  className="appearance-none h-8 w-8 border border-sky-700 rounded-full checked:bg-sky-500 checked:border-transparent focus:outline-none"
                />
                <span className="ml-2 text-xl">6</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="favoriteSibling"
                  value="No"
                  {...register("question3")}
                  onChange={handleChange}
                  className="appearance-none h-8 w-8 border border-gray-700 rounded-full checked:bg-sky-500 checked:border-transparent focus:outline-none"
                />
                <span className="ml-2 text-xl">8</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="favoriteSibling"
                  value="Nutural"
                  {...register("question3")}
                  onChange={handleChange}
                  className="appearance-none h-8 w-8 border border-gray-700 rounded-full checked:bg-sky-500 checked:border-transparent focus:outline-none"
                />
                <span className="ml-2 text-xl">12</span>
              </label>
            </div>
          </div>
        </div>

        {/* Question 04 */}
        <div className={` bg-white font-short-stack py-10 p-6 rounded-3xl shadow-md mb-12  ${borderColor}`}>
          <div className="mb-4">
            <label className="block text-xl font-semibold mb-2">
              {question4}
            </label>
            <div className="flex items-center space-x-8">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="favoriteSibling"
                  value="Yes"
                  {...register("question4")}
                  onChange={handleChange}
                  className="appearance-none h-8 w-8 border border-sky-700 rounded-full checked:bg-sky-500 checked:border-transparent focus:outline-none"
                />
                <span className="ml-2 text-xl">180 degrees</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="favoriteSibling"
                  value="No"
                  {...register("question4")}
                  onChange={handleChange}
                  className="appearance-none h-8 w-8 border border-gray-700 rounded-full checked:bg-sky-500 checked:border-transparent focus:outline-none"
                />
                <span className="ml-2 text-xl">90 degrees</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="favoriteSibling"
                  value="Nutural"
                  {...register("question4")}
                  onChange={handleChange}
                  className="appearance-none h-8 w-8 border border-gray-700 rounded-full checked:bg-sky-500 checked:border-transparent focus:outline-none"
                />
                <span className="ml-2 text-xl">360 degrees</span>
              </label>
            </div>
          </div>
        </div>

        {/* Question 05 */}
        <div className={`py-10 p-6 font-short-stack rounded-3xl shadow-md mb-2 bg-white ${borderColor}`}>
          <div className="mb-4">
            <label className="block text-xl font-semibold mb-2">
              {question5}
            </label>
            <div className="flex items-center space-x-8">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="favoriteSibling"
                  value="Yes"
                  {...register("question5")}
                  onChange={handleChange}
                  className="appearance-none h-8 w-8 border border-sky-700 rounded-full checked:bg-sky-500 checked:border-transparent focus:outline-none"
                />
                <span className="ml-2 text-xl">43</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="favoriteSibling"
                  value="No"
                  {...register("question5")}
                  onChange={handleChange}
                  className="appearance-none h-8 w-8 border border-gray-700 rounded-full checked:bg-sky-500 checked:border-transparent focus:outline-none"
                />
                <span className="ml-2 text-xl">55</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="favoriteSibling"
                  value="Nutural"
                  {...register("question5")}
                  onChange={handleChange}
                  className="appearance-none h-8 w-8 border border-gray-700 rounded-full checked:bg-sky-500 checked:border-transparent focus:outline-none"
                />
                <span className="ml-2 text-xl">23</span>
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FirstPage;
