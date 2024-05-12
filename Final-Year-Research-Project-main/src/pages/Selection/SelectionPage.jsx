import React from "react";
import MainBoxes from "./MainBoxes";
import { AwesomeButton } from "react-awesome-button";
import { useNavigate } from "react-router-dom";
 
export default function SelectionPage() {
  const navigate = useNavigate();
  return (
    <>
      <div className="px-10 mt-5 flex justify-between w-full">
        <div>
          <AwesomeButton
            type="primary"
            onReleased={() => {
              navigate("/");
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
        <div>
          <h1 className="text-6xl mr-28"> Let's get to do some Quizzezs ?</h1>
        </div>
        <div>
          {""}
        </div>
      </div>
      <MainBoxes />
    </>
  );
}