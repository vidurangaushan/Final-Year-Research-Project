const router = require("express").Router();
//const maths_quiz = require("../models/maths_quiz");
let mathsquiz = require("../models/maths_quiz.js");

//get quiz
// router.route("/").get((req,res)=>{
    
//     mathsquiz.find().then((maths_quiz)=>{
//         res.json(maths_quiz)
//     }).catch((err)=>{
//         console.log(err)
//     })
// })

//10 quiz
router.route("/").get((req, res) => {
    mathsquiz.find()
      .then(async (allMathsQuiz) => {
        if (!allMathsQuiz.length) {
          return res.json([]); // Handle empty database scenario
        }
  
        // Randomly select an index within the document count
        const randomIndex = Math.floor(Math.random() * allMathsQuiz.length);
  
        // Skip the random number of documents and limit to 10
        const randomSample = allMathsQuiz.slice(randomIndex, randomIndex + 10);
  
        res.json(randomSample);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({ message: "Error fetching Maths quizzes" });
      });
  });
  

module.exports = router;