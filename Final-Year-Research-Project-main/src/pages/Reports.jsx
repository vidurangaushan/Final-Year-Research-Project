import { useState, useEffect } from 'react';
import './report.css';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import HeaderImg from "./../assets/images/Family/FAMILY1.png";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css"
import {English} from "../pages/English"

export function Reports() {

  const navigate = useNavigate();
  const location = useLocation();
  const [scoreFromState, setScoreFromState] = useState(location.state ?.score || 0);
  const [percentage, setPercentage] = useState(0);
  const [subjectName, setSubjectName] = useState(location.state?.subjectName || "");

  // Display the score
  //console.log("Your score:", score, "out of 10");
  useEffect(() => {
    // Access and display score after component mounts
    console.log("Your score:", scoreFromState, "out of 10"); // Or display in UI
    const totalMarks = 10; // Replace with actual total marks if different
    const calculatedPercentage = Math.floor((scoreFromState / totalMarks) * 100);
    setPercentage(calculatedPercentage);
  }, [scoreFromState]);


  // Define educational level based on percentage (optional)
  let educationalLevel;
  if (percentage >= 75) {
    educationalLevel = "Good";
  } else if (percentage >= 50) {
    educationalLevel = "Average";
  } else {
    educationalLevel = "Weak";
  }

  return (
    
      //<div className="flex justify-content items-center">
      <div className="bg-cover bg-center bg-fixed" style={{marginTop:5, marginBottom:5, marginLeft:5, marginRight:5, backgroundColor:"#ABE8CA", borderRadius: 20, boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)"}}  >
      
      <div className="flex justify-center ">
        <div className="card" style={{ width:1600, marginBottom:10, backgroundColor:"#ABE8CA", borderRadius: 20, boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)"}}  >
            <div className="flex justify-center ">
                <div
                // className="w-full  h-72 relative rounded-t-3xl bg-stone-100"
                className="w-full  h-80 relative rounded-t-3xl bg-stone-100 bg-no-repeat bg-cover bg-contain bg-center"
                style={{ backgroundImage: `url(${HeaderImg})` ,height:200 }}
                >
                  <div className="absolute top-0 left-0 ml-4 mt-4">
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
              Go Home
            </AwesomeButton>
          </div>
                    <div>
                    <h1 className="text-5xl mr-30" 
                        style={{textAlign:'center',padding:50, height:150,marginTop:10, marginBottom:10, borderRadius: 20}}>
                        Results :)
                        </h1>
                    </div>
                </div>
            </div>
        </div>
      </div>
      
      
      <div className="content">
        {/* Other content goes here */}
        <h1 className="text-3xl mr-30" style={{padding:25,textAlign:"center"}}>{subjectName ? `Your ${subjectName} Quiz Results Here.....` : 'Your Quiz Results Here.....'}</h1>

        <div className="card report-body" style={{marginLeft:450, marginTop:30, marginBottom:20, width:600,
           backgroundColor:"#FFFFFF", borderRadius: 20, boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)"
           ,padding:10}}>
        {scoreFromState !== null && (
          <>
            <p>You answered {scoreFromState} out of 10 questions correctly.</p>
            <p>Your marks percentage is {percentage}%</p>
            {educationalLevel && <p>Your educational level is: {educationalLevel}</p>} {/* Display educational level only if defined */}
            <p>Edu_Level : {subjectName}_{educationalLevel}</p>
          </>

            )}
        </div>    
      </div>

        <a href='/' 
        className="btn btn-warning"
        type="button"
        style={{
          color: 'white',
          backgroundColor:'red',
          textDecoration: 'bold',
          padding: 10,
          marginBottom:30,
          marginTop:300,
          marginLeft:10,
          border: '2px solid red', // Outline color
          cursor: 'pointer', // Change cursor to pointer on hover
          borderRadius: 20
        }} 
        onClick={()=> navigate("/")}
       > Back to Home</a> 
      

      {/* <div>
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
          </div> */}
        

    </div>
    
  
  );
}
