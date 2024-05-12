// SecondPage.jsx
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const SecondPage = ({ formData, setFormData }) => {
  const { register } = useForm();
  const color = "bg-gradient-to-br from-sky-200 to-sky-200";
  const borderColor = "border-sky-300"
  const [expand, setExpand] = useState(false)

  const question6 = "06. Do you feel frightned to reveal what he or she does?";
  const question7 = "07. Do you have both your parents?";
  const question8 = "08. Do you think your family loves and care for you?";

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
            <input
              type="text"
              className="w-full  px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400"
              placeholder="Type your answer here..."
              value={formData.question6 || ""}
              {...register("question6")}
              onChange={handleChange}
            />
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
                <span className="ml-2 text-lg">Yes</span>
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
                <span className="ml-2 text-lg">No</span>
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
                <span className="ml-2 text-lg">Yes</span>
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
                <span className="ml-2 text-lg">No</span>
              </label>
              
            </div>
          </div>
          {formData.question8 == 'No' && 
          <input
              type="text"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400"
              placeholder="Why do you think so?"
              value={formData.question8Part2 || ""}
              {...register("question8Part2")}
              onChange={handleChange}
           />
           }
        </div>
      </form>
    </div>
  );
};

export default SecondPage;
