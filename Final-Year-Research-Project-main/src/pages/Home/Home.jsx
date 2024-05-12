import React from "react";
import TopBar from "./TopBar";
import { homeContent } from "../../Content/Text";
import { AwesomeButton } from "react-awesome-button";
import { useNavigate } from "react-router-dom";
import bgImage from '../../assets/images/backgrounds/kp.png'

function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="h-screen">
      <TopBar />
      <div className="flex h-full">
        <div className="w-1/2 flex flex-col items-center justify-center ">
          <div className=" w-2/3">
            <h1 className="font-short-stack text-3xl">{homeContent.title}</h1>
            <p className="font-delius text-2xl">{homeContent.aboutUs}</p>
          </div>
          <div className="flex mt-8 w-2/3">
            <div className="mr-2">
              <AwesomeButton
                type="primary"
                onReleased={() => {
                  navigate(homeContent.btn1Navigation);
                }}
                style={{
                  "--button-primary-color": "#ffbc05",
                  "--button-primary-color-dark": "#daa000",
                  "--button-primary-color-light": "#ffffff",
                  "--button-primary-color-hover": "#00cee9",
                  "--button-primary-color-active": "#00a5bb",
                  "--button-default-border-radius": "8px",
                  height: "45px",
                  marginRight: "10px",
                  fontSize: "20px",
                  borderStyle: "solid",
                  borderRadius: "10px",
                  borderColor: "black"
                }}
              >
                {homeContent.bt1Name}
              </AwesomeButton>
            </div>
            <div>
              <AwesomeButton
                type="primary"
                onReleased={() => {
                  handleNavigate();
                }}
                style={{
                  "--button-primary-color": "#ffbc05",
                  "--button-primary-color-dark": "#daa000",
                  "--button-primary-color-light": "#ffffff",
                  "--button-primary-color-hover": "#00cee9",
                  "--button-primary-color-active": "#00a5bb",
                  "--button-default-border-radius": "8px",
                  height: "45px",
                  marginRight: "10px",
                  fontSize: "20px",
                  borderStyle: "solid",
                  borderRadius: "10px",
                  borderColor: "black"
                }}
              >
                {homeContent.bt2Name}
              </AwesomeButton>
            </div>
          </div>
        </div>
        <div className="w-1/2 bg-amber-300 h-full">
              <div className="flex h-screen items-center justify-center">
                <div>
                  <img src={bgImage} width={700} alt="bgImage" />
                </div>
              </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
