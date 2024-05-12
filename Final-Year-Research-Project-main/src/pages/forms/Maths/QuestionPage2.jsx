// SecondPage.jsx
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const SecondPage = ({ formData, setFormData }) => {
  const { register } = useForm();
  const color = "bg-gradient-to-br from-sky-200 to-sky-200";
  const borderColor = "border-sky-300"
  const [expand, setExpand] = useState(false)

  /* 
   What is the next number in the pattern: 3, 6, 9, 12, __?\na) 15 (Correct Answer)\nb) 16\nc) 18\n\n
   What is the area of a square with a side length of 6 cm?\na) 24 sq cm\nb) 36 sq cm (Correct Answer)\nc) 48 sq cm\n\n
   What is the perimeter of a triangle with side lengths 4 cm, 5 cm, and 6 cm?\na) 15 cm (Correct Answer)\nb) 18 cm\nc) 20 cm
  */ 

  const question6 = "06. What is the next number in the pattern: 3, 6, 9, 12, __?";
  const question7 = "07. What is the area of a square with a side length of 6 cm?";
  const question8 = "08. What is the perimeter of a triangle with side lengths 4 cm, 5 cm, and 6 cm?";
  const question9 = "09. What is the value of 4 ÷ 2 x 6?";
  const question10 = "10. What is the hight of a cube with a length of 6 cm, width 5cm, volume 180cm3?";

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
        {/* Question 06 */}
        <div className={`bg-white py-10 font-short-stack p-6 rounded-3xl shadow-md mb-12 ${borderColor}` }>
          <div className="mb-4">
            <label className="block text-xl font-semibold mb-2">
              {question6}
            </label>
            <div className="flex items-center space-x-8">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="bothParents"
                  value="Yes"
                  {...register("question6")}
                  onChange={handleChange}
                  className="appearance-none h-8 w-8 border border-gray-700 rounded-full checked:bg-gray-500 checked:border-transparent focus:outline-none"
                />
                <span className="ml-2 text-lg">15</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="bothParents"
                  value="No"
                  {...register("question6")}
                  onChange={handleChange}
                  className="appearance-none h-8 w-8 border border-gray-700 rounded-full checked:bg-gray-500 checked:border-transparent focus:outline-none"
                />
                <span className="ml-2 text-lg">13</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="bothParents"
                  value="No"
                  {...register("question6")}
                  onChange={handleChange}
                  className="appearance-none h-8 w-8 border border-gray-700 rounded-full checked:bg-gray-500 checked:border-transparent focus:outline-none"
                />
                <span className="ml-2 text-lg">16</span>
              </label>
            </div>
            {/* <input
              type="text"
              className="w-full  px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400"
              placeholder="Type your answer here..."
              value={formData.question6 || ""}
              {...register("question6")}
              onChange={handleChange}
            /> */}
          </div>
        </div>

        {/* Question 07 */}
        <div className={` bg-white py-10 font-short-stack p-6 rounded-3xl shadow-md mb-12  ${borderColor}` }>
          <div className="mb-4">
            <label className="block text-xl font-semibold mb-2">
              {question7}
            </label>
            <div className="flex items-center space-x-8">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="bothParents"
                  value="Yes"
                  {...register("question7")}
                  onChange={handleChange}
                  className="appearance-none h-8 w-8 border border-gray-700 rounded-full checked:bg-gray-500 checked:border-transparent focus:outline-none"
                />
                <span className="ml-2 text-lg">36cm2</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="bothParents"
                  value="No"
                  {...register("question7")}
                  onChange={handleChange}
                  className="appearance-none h-8 w-8 border border-gray-700 rounded-full checked:bg-gray-500 checked:border-transparent focus:outline-none"
                />
                <span className="ml-2 text-lg">24cm2</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="bothParents"
                  value="No"
                  {...register("question7")}
                  onChange={handleChange}
                  className="appearance-none h-8 w-8 border border-gray-700 rounded-full checked:bg-gray-500 checked:border-transparent focus:outline-none"
                />
                <span className="ml-2 text-lg">12cm2</span>
              </label>
            </div>
          </div>
        </div>

        {/* Question 08 */}
        <div className={`bg-white py-10 p-6 font-short-stack rounded-3xl shadow-md mb-12 ${borderColor}` }>
          <div className="mb-4">
            <label className="block text-xl font-semibold mb-2">
              {question8}
            </label>
            <div className="flex items-center space-x-8">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="bothParents"
                  value="Yes"
                  {...register("question8")}
                  onChange={handleChange}
                  className="appearance-none h-8 w-8 border border-gray-700 rounded-full checked:bg-gray-500 checked:border-transparent focus:outline-none"
                />
                <span className="ml-2 text-lg">13cm</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="bothParents"
                  value="No"
                  {...register("question8")}
                  onChange={handleChange}
                  className="appearance-none h-8 w-8 border border-gray-700 rounded-full checked:bg-gray-500 checked:border-transparent focus:outline-none"
                />
                <span className="ml-2 text-lg">15cm</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="bothParents"
                  value="No"
                  {...register("question8")}
                  onChange={handleChange}
                  className="appearance-none h-8 w-8 border border-gray-700 rounded-full checked:bg-gray-500 checked:border-transparent focus:outline-none"
                />
                <span className="ml-2 text-lg">18cm</span>
              </label>
              
            </div>
          </div>
          {/* {formData.question8 == 'No' && 
          <input
              type="text"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400"
              placeholder="Why do you think so?"
              value={formData.question8Part2 || ""}
              {...register("question8Part2")}
              onChange={handleChange}
           />
           } */}
        </div>

        {/* Question 09 */}
        <div className={` bg-white py-10 font-short-stack p-6 rounded-3xl shadow-md mb-12  ${borderColor}` }>
          <div className="mb-4">
            <label className="block text-xl font-semibold mb-2">
              {question9}
            </label>
            <div className="flex items-center space-x-8">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="bothParents"
                  value="Yes"
                  {...register("question9")}
                  onChange={handleChange}
                  className="appearance-none h-8 w-8 border border-gray-700 rounded-full checked:bg-gray-500 checked:border-transparent focus:outline-none"
                />
                <span className="ml-2 text-lg">12</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="bothParents"
                  value="No"
                  {...register("question9")}
                  onChange={handleChange}
                  className="appearance-none h-8 w-8 border border-gray-700 rounded-full checked:bg-gray-500 checked:border-transparent focus:outline-none"
                />
                <span className="ml-2 text-lg">16</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="bothParents"
                  value="No"
                  {...register("question9")}
                  onChange={handleChange}
                  className="appearance-none h-8 w-8 border border-gray-700 rounded-full checked:bg-gray-500 checked:border-transparent focus:outline-none"
                />
                <span className="ml-2 text-lg">18</span>
              </label>
            </div>
          </div>
        </div>

        {/* Question 10 */}
        <div className={` bg-white py-10 font-short-stack p-6 rounded-3xl shadow-md mb-12  ${borderColor}` }>
          <div className="mb-4">
            <label className="block text-xl font-semibold mb-2">
              {question10}
            </label>
            <div className="flex items-center space-x-8">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="bothParents"
                  value="Yes"
                  {...register("question10")}
                  onChange={handleChange}
                  className="appearance-none h-8 w-8 border border-gray-700 rounded-full checked:bg-gray-500 checked:border-transparent focus:outline-none"
                />
                <span className="ml-2 text-lg">4cm</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="bothParents"
                  value="No"
                  {...register("question10")}
                  onChange={handleChange}
                  className="appearance-none h-8 w-8 border border-gray-700 rounded-full checked:bg-gray-500 checked:border-transparent focus:outline-none"
                />
                <span className="ml-2 text-lg">6cm</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="bothParents"
                  value="No"
                  {...register("question10")}
                  onChange={handleChange}
                  className="appearance-none h-8 w-8 border border-gray-700 rounded-full checked:bg-gray-500 checked:border-transparent focus:outline-none"
                />
                <span className="ml-2 text-lg">8cm</span>
              </label>
            </div>
          </div>
        </div>

      </form>
    </div>
  );
};

export default SecondPage;
