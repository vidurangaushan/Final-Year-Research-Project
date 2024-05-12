const router = require("express").Router();
//const maths_quiz = require("../models/maths_quiz");
let englishquiz = require("../models/english_quiz.js");

//get quiz
// router.route("/").get((req,res)=>{
    
//     englishquiz.find().then((english_quiz)=>{
//         res.json(english_quiz)
//     }).catch((err)=>{
//         console.log(err)
//     })
// })

// 10 quiz
router.route("/").get((req, res) => {
    englishquiz.find()
      .then(async (allEnglishQuiz) => {
        if (!allEnglishQuiz.length) {
          return res.json([]); // Handle empty database scenario
        }
  
        // Randomly select an index within the document count
        const randomIndex = Math.floor(Math.random() * allEnglishQuiz.length);
  
        // Skip the random number of documents and limit to 10
        const randomSample = allEnglishQuiz.slice(randomIndex, randomIndex + 10);
  
        res.json(randomSample);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({ message: "Error fetching English quizzes" });
      });
  });
  
  

module.exports = router;