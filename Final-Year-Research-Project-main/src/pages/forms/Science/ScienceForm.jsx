import React from "react";

import { useState } from "react";
import FirstPage from "./QuestionPage1";
import SecondPage from "./QuestionPage2";

import Modal from "../../../components/Modal";
import SuccessModal from "../../../components/Success";
import HeaderImg from "../../../assets/images/Social/SOCIAL.png";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { useNavigate } from "react-router-dom";

export default function SocialForm() {
  const [formData, setFormData] = useState({});
  const [showForm, setShowForm] = useState("form1");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const HandleSubmit = () => {
    setShowForm("submit");
    console.log("hello", formData);
  };

  const handleNext = () => {
    // Check if there are no null values
    if (
      !formData.question1 ||
      !formData.question2 ||
      !formData.question3 ||
      !formData.question4 ||
      !formData.question5
    ) {
      setShowModal(true);
      return;
    }
    setShowForm("form2");
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div
      className="bg-cover bg-center bg-fixed"
      // style={{ backgroundImage: `url(${BGImage})` }}
    >
      <div className="flex justify-center ">
        <div
          // className="w-full  h-72 relative rounded-t-3xl bg-stone-100"
          className="w-full  h-80 relative rounded-t-3xl bg-stone-100 bg-no-repeat bg-cover bg-contain bg-center"
          style={{ backgroundImage: `url(${HeaderImg})` }}
        >
          <div className="absolute top-0 left-0 ml-4 mt-4">
            <AwesomeButton
              type="primary"
              onReleased={() => {
                navigate("/selection");
              }}
              style={{
                "--button-primary-color": "#de2183",
                "--button-primary-color-dark": "#c20d95",
                "--button-primary-color-light": "#ffffff",
                "--button-primary-color-hover": "#de2183",
                "--button-primary-color-active": "#c20d95",
                "--button-default-border-radius": "8px",
                width: "120px",
                height: "45px",
                marginRight: "10px",
                borderStyle: "solid",
                borderRadius: "10px",
                borderColor: "black",
              }}
            >
              Go Back
            </AwesomeButton>
          </div>

          <div className="flex justify-center items-center h-full">
            <span className="text-5xl">Science</span>
          </div>
        </div>
      </div>

      <div className="flex bg-sky-100 justify-center items-center ">
        {showForm == "form1" && (
          <div className="w-12/12 px-20 pt-20 pb-12 relative rounded-b-3xl">
            <FirstPage formData={formData} setFormData={setFormData} />
          </div>
        )}
        {showForm == "form2" && (
          <div className="w-full px-20 pt-20  relative rounded-b-3xl">
            <SecondPage formData={formData} setFormData={setFormData} />
          </div>
        )}
      </div>

      <div className="flex justify-center bg-sky-100 items-center  pb-10 ">
        <div className="w-full mr-10 flex justify-end items-center">
          {showForm == "form1" && (
            <AwesomeButton
              type="primary"
              onReleased={() => {
                handleNext();
              }}
              style={{
                "--button-primary-color": "#21b8de",
                "--button-primary-color-dark": "#0494b8",
                "--button-primary-color-light": "#ffffff",
                "--button-primary-color-hover": "#12a0c4",
                "--button-primary-color-active": "#038aab",
                "--button-default-border-radius": "8px",
                width: "120px",
                height: "45px",
                marginRight: "10px",
                borderStyle: "solid",
                borderRadius: "10px",
                borderColor: "black",
              }}
            >
              Next form
            </AwesomeButton>
          )}
          {showForm == "form2" && (
            <AwesomeButton
              type="primary"
              onReleased={() => {
                setShowForm("form1");
              }}
              style={{
                "--button-primary-color": "#21b8de",
                "--button-primary-color-dark": "#0494b8",
                "--button-primary-color-light": "#ffffff",
                "--button-primary-color-hover": "#12a0c4",
                "--button-primary-color-active": "#038aab",
                "--button-default-border-radius": "8px",
                width: "120px",
                height: "45px",
                marginRight: "10px",
                borderStyle: "solid",
                borderRadius: "10px",
                borderColor: "black",
              }}
            >
              Back form
            </AwesomeButton>
          )}
          {showForm == "form2" && (
            <AwesomeButton
              type="primary"
              onReleased={() => {
                HandleSubmit();
              }}
              style={{
                "--button-primary-color": "#deac21",
                "--button-primary-color-dark": "#997000",
                "--button-primary-color-light": "#ffffff",
                "--button-primary-color-hover": "#af8718",
                "--button-primary-color-active": "#a07b17",
                "--button-default-border-radius": "8px",
                width: "120px",
                height: "45px",
                marginRight: "10px",
                borderStyle: "solid",
                borderRadius: "10px",
                borderColor: "black",
              }}
            >
              Submit
            </AwesomeButton>
          )}
        </div>
      </div>
      {showForm == "submit" && <div className=""></div>}

      <Modal
        isOpen={showModal}
        message="Hey you need to fill everything to go to the next part :) "
        onClose={handleCloseModal}
      />
      {showForm == "submit" && <SuccessModal quiz={"Quiz 03"} />}
    </div>
  );
}
