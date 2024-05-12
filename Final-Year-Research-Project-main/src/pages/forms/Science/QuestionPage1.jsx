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

  const question1 = "01. What do you think about your family?";
  const answerForQuestion1 = [
    { image: Q1Image1, text: "Positive" },
    { image: Q1Image1, text: "Neutral" },
    { image: Image, text: "Negative" },
    { image: Q1Image1, text: "depressed" },
    { image: Q1Image1, text: "suicidal" },
  ];
  const question2 = "02. Who do you like best in your family?";
  const question3 = "03. Does anyone make you frightend within your family?";
  const question4 = "04. Who makes you frightend in the family?";
  const question5 = "05. Do you have any favourite brother or sister?";

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
        <div className="mb-12">
          <QuestionImageCard
            question={question1}
            answers={answerForQuestion1}
            selectedAnswer={selectedAnswer}
            onAnswerSelect={(answerText) => handleAnswerSelect("1", answerText)}
            setFormData={setFormData}
            color={"bg-white py-12 font-short-stack"}
            borderColor={borderColor}
          />
        </div>

        {/* Question 02 */}
        <div className={`bg-white font-short-stack p-6 py-10 rounded-3xl shadow-md mb-12  ${borderColor}`}>
          <div className="mb-4">
            <label className="block text-xl font-semibold mb-2">
              {question2}
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-3xl focus:outline-none focus:border-blue-400"
              placeholder="Type your answer here..."
              value={formData.question2 || ""}
              {...register("question2")}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Question 03 */}
        <div className={` bg-white font-short-stack py-10 p-6 rounded-3xl shadow-md mb-12  ${borderColor}` }>
          <div className="mb-4">
            <label className="block text-xl font-semibold mb-2">
              {question3}
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-3xl focus:outline-none focus:border-blue-400"
              placeholder="Type your answer here..."
              value={formData.question3 || ""}
              {...register("question3")}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Question 04 */}
        <div className={` bg-white font-short-stack py-10 p-6 rounded-3xl shadow-md mb-12  ${borderColor}`}>
          <div className="mb-4">
            <label className="block text-xl font-semibold mb-2">
              {question4}
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-3xl focus:outline-none focus:border-blue-400"
              placeholder="Type your answer here..."
              value={formData.question4 || ""}
              {...register("question4")}
              onChange={handleChange}
            />
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
                <span className="ml-2 text-xl">Yes</span>
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
                <span className="ml-2 text-xl">No</span>
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FirstPage;
