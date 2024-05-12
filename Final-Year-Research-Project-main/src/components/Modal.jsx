import React from "react";
import Image from '../assets/images/question.png'
import { AwesomeButton } from "react-awesome-button";

const Modal = ({ isOpen, message, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed top-0  left-0 w-full h-full flex justify-center items-center bg-gray-800/50  z-50">
      <div className="bg-blue-600  w-80 p-4 rounded-2xl shadow-md">
        <div className="flex items-center justify-center mt-10">
        <img
          src={Image}
          alt="Image"
          className="bottom-0 right-0 mb-4 mr-4 w-48 h-48"
        />
        </div>
      
        <div className="bg-sky-100 p-8 m-4 rounded-lg">
          <p className="text-lg">{message}</p>
        </div>
        
        <div className="flex items-center justify-center mt-2 mb-6">
          <div className="mt-4">
            <AwesomeButton
              type="primary"
              onReleased={() => {
                onClose();
              }}
              style={{
                "--button-primary-color": "#f8bd1a",
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
                fontSize: "20px",
              }}
            >
              Ok
            </AwesomeButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
