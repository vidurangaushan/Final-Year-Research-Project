import React from "react";
import { useNavigate } from "react-router-dom";
import img from "../assets/images/Success/stars.png";
import { AwesomeButton } from "react-awesome-button";

const SuccessModal = ({quiz}) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
      <div className="bg-amber-800 bg-opacity-20 backdrop-blur-lg absolute top-0 left-0 w-full h-full"></div>

      <div className="bg-red-500  w-80  p-8 rounded-3xl shadow-md text-center relative">
        <h2 className="text-4xl mb-40 text-white font-londrina-solid mb-4">
          {quiz}
        </h2>

        <div
          className="flex justify-center absolute items-center"
          style={{ marginTop: "-140px", marginLeft: "-15px" }}
        >
          <img src={img} width={280} alt="star image" />
        </div>

        <div className="flex items-center justify-center">
          <div className="bg-yellow-100 shadow-lg rounded-xl w-60 pt-10 mb-6 ">
            <p className="font-short-stack m-4 font-bold text-lg mb-12">
              Your answers are now saved. Great Job kiddo.Let's Look your Results
            </p>
          </div>
        </div>

        <div>
          <div>
            <AwesomeButton
              type="primary"
              onReleased={() => {
                navigate("/Results");
              }}
              style={{
                "--button-primary-color": "#ffbc05",
                "--button-primary-color-dark": "#daa000",
                "--button-primary-color-light": "#ffffff",
                "--button-primary-color-hover": "#00cee9",
                "--button-primary-color-active": "#00a5bb",
                "--button-default-border-radius": "10px",
                height: "40px",
                width: "150px",
                marginRight: "10px",
                fontSize: "20px",
                borderStyle: "solid",
                borderRadius: "12px",
                borderColor: "black"
              }}
            >
              Results
            </AwesomeButton>
          </div>
          <div className="mt-2">
            <AwesomeButton
              type="primary"
              onReleased={() => {
                navigate("/");
              }}
              style={{
                "--button-primary-color": "#ffbc05",
                "--button-primary-color-dark": "#daa000",
                "--button-primary-color-light": "#ffffff",
                "--button-primary-color-hover": "#00cee9",
                "--button-primary-color-active": "#00a5bb",
                "--button-default-border-radius": "10px",
                height: "40px",
                marginRight: "10px",
                width: "150px",
                fontSize: "20px",
                borderStyle: "solid",
                borderRadius: "12px",
                borderColor: "black"
              }}
            >
              Go Home
            </AwesomeButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
