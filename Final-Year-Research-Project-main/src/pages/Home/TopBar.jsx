import React from "react";
import ProductLogo from "../../components/Logo";
import { AwesomeButton } from "react-awesome-button";
import { useNavigate } from "react-router-dom";
import { homeContent } from "../../Content/Text";

function TopBar() {
    const navigate = useNavigate()
  return (
    <div className="p-4 flex justify-between items-center px-16 fixed top-0 w-full z-10">
      {/* Left side: App logo */}
      <div className="flex items-center">
        {/* <img
          src="/path/to/your/logo.png"
          alt="Logo"
          className="w-10 h-10 mr-2"
        /> */}
        <ProductLogo />
      </div>
      {/* Right side: Button */}
      <AwesomeButton
                type="primary"
                onReleased={() => {
                  navigate(homeContent.TopRightButtonNavigation);
                }}
                style={{
                  "--button-primary-color": "#f6326d",
                  "--button-primary-color-dark": "#c41147",
                  "--button-primary-color-light": "#ffffff",
                  "--button-primary-color-hover": "#da0bff",
                  "--button-primary-color-active": "#d105ce",
                  "--button-default-border-radius": "8px",
                  height: "45px",
                  marginRight: "10px",
                  fontSize: "20px",
                  borderStyle: "solid",
                  borderRadius: "10px",
                  borderColor: "black"
                }}
              >
                {homeContent.TopRightButtonName}
              </AwesomeButton>
    </div>
  );
}

export default TopBar;
