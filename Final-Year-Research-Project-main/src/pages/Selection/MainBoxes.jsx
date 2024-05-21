import React from "react";
import Box from "./Box";
import Imagee from '../../assets/images/selectionBG.jpg'
import image1 from '../../assets/images/selectionPage/math1.png'
import image2 from '../../assets/images/selectionPage/ss.png'
import image3 from '../../assets/images/selectionPage/science1.png'

export default function MainBoxes() {
  return (
    <>
      {/* <div className="flex flex-col items-center md:justify-center h-screen bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${Image})` }}> */}
      <div className="flex flex-col items-center md:justify-center h-screen" >
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          <Box
            onClick={"/maths"}
            color={"bg-lime-400"}
            subTopic={"Click me to get some questions about mathematics"}
            topic={"Mathematics"}
            svg={image1}
          />
          <Box
          onClick={"/english"}
          color={"bg-orange-300"}
            subTopic={"I will ask questionf about your English"}
            topic={"English"}
            svg={image2}
          />
          <Box
          onClick={"/science"}
          color={"bg-pink-300"}
            subTopic={"Lets answer some questions about Science ya?"}
            topic={"Science"}
            svg={image3}
          />
        </div>
      </div>
    </>
  );
}
