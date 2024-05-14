import { useEffect, useState } from 'react';
import './report.css';
import { useNavigate, useParams } from 'react-router-dom';
import HeaderImg from "./../assets/images/Family/FAMILY1.png";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import axios from 'axios';
import { Reports } from "../pages/Reports";


export function English() {

    const {id} = useParams();
    const[englishquiz, setEnglishquiz] = useState([]);
    const [loading, setLoading] = useState(true);
    const perPage = 10; // Number of quizzes per page
    const navigate = useNavigate()
    const borderColor = "border-inherit"

    useEffect(()=>{
        function getEnglishquiz(){           
          axios.get("http://127.0.0.1:5000/english").then((res)=>{
                console.log(res);
                setEnglishquiz(res.data);
                setLoading(false);

            }).catch((err)=>{
                alert(err.message);
                setLoading(false);
            })
        }
        getEnglishquiz();
    } , []);

    const handleSubmit = () =>{
      // Check if all questions have been answered
        const unansweredQuestions = englishquiz.filter((quiz, index) => {
            const selectedAnswer = document.querySelector(`input[name="question_${index}"]:checked`);
            return !selectedAnswer;
        });
        if (unansweredQuestions.length > 0) {
          alert("Please answer all questions before submitting.");
          return;
      }
      //collect selected answers
      const submittedAnswers = englishquiz.map((quiz, index)=>{
        const selectedAnswer = document.querySelector(`input[name="question_${index}"]:checked`);
        return{
            question: quiz.question,
            selectedAnswer: selectedAnswer ? selectedAnswer.value : null,
            correctAnswer: quiz.correctAnswer
      };
    });

    // Evaluate the answers
    let score = 0;
    submittedAnswers.forEach(answer => {
      if (answer.selectedAnswer === answer.correctAnswer) {
          score++;
       }
    });
        // Display the score
        console.log("Your score:", score, "out of", englishquiz.length);
        //console.log("Answers submitted:", answers);
        const subjectName = "English";
        navigate("/Reports", { state: { score , subjectName } });
  };  

  return (
    
    <div
      className="bg-cover bg-center bg-fixed"
      >
      <div className="flex justify-center ">
        <div className="card" style={{ width:1600,marginTop:10, marginBottom:10, marginLeft:20, marginRight:20, backgroundColor:"#ABE8CA", borderRadius: 20, boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)"}}  >
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
                <div>
                    <h1 className="text-5xl mr-30" 
                        style={{textAlign:'center',padding:50, height:150,marginTop:10, marginBottom:10, borderRadius: 20}}>
                        English Quiz :)
                        </h1>
                    </div>
                </div>
            </div>
        </div>
      </div>

    <div className="content">
      {loading ? ( // Render loading message while data is being fetched
          <div className = "block text-xl font-semibold mb-2">Loading quizzes...</div>
      ) : (
          englishquiz && englishquiz.length > 0 ? (
              englishquiz.map((e, index) => (
                  <div className={`py-10 p-6 font-short-stack rounded-3xl shadow-md mb-2 bg-white ${borderColor}`} key={index}
                   style={{width:1000,marginLeft:250,marginTop:20, padding:10, backgroundColor: "#FAFAAA", borderRadius: 20 }}>
                      <div className='mb-4'>
                        <lable className = "block text-xl font-semibold mb-2">
                          <h2>Question {index + 1}</h2>
                          <h3>{e.question}</h3>
                          </lable>
                          <ul>
                              {e.options && e.options.map((option, optionIndex) => (
                                  <li key={optionIndex}>
                                    <div className="flex items-center space-x-8">
                                    <label className="flex items-center">
                                      <input type="radio" name={`question_${index}`} value={option} 
                                      className="appearance-none h-4 w-4 border border-gray-700 rounded-full checked:bg-sky-500 checked:border-transparent focus:outline-none"
                                      />
                                      <label>{option}</label>
                                    </label> 
                                    </div> 
                                  </li>
                              ))}
                          </ul>
                      </div>
                  </div>
              ))
          ) : (
              <div>No quizzes available.</div>
          )
      )}

    </div>
    <div style={{ 
      textAlign: "center" ,
      color: 'white',
      backgroundColor:'green',
      textDecoration: 'bold',
      padding: 10,
      width:150,
      marginLeft:1200,
      border: '2px solid green', // Outline color
      cursor: 'pointer', // Change cursor to pointer on hover
      borderRadius: 20

    }}>
      <button className="btn btn-primary" onClick={handleSubmit}>
        Submit Answers
      </button>
    </div>
    
      {/*Button */}
        <a href='/' 
        className="btn btn-warning"
        type="button"
        style={{
          color: 'white',
          backgroundColor:'red',
          textDecoration: 'bold',
          padding: 10,
          marginBottom:30,
          marginTop:30,
          marginLeft:10,
          border: '2px solid red', // Outline color
          cursor: 'pointer', // Change cursor to pointer on hover
          borderRadius: 20
        }} 
        //onClick={"/"}
       > Back to Home</a> 
      
    
    </div>
  
  );
}
