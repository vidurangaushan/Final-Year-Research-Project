const router = require("express").Router();
let sciencequiz = require("../models/science_quiz.js");

// //add quiz
// router.route("/add").post((req,res)=>{

//     const name = req.body.name;
//     const age = req.body.age;

//     const newsciquiz = new sciencequiz({
//         name,
//         age
//     });

//     newsciquiz.save().then((result)=>{
//         res.json({status:"quiz added",student_id: result.id })
//     }).catch((err)=>{
//         console.log(err);
//     })
// })

// router.route("/").get((req,res)=>{
    
//     sciencequiz.find().then((science_quiz)=>{
//         res.json(science_quiz)
//     }).catch((err)=>{
//         console.log(err)
//     })
// })

//10 quiz
router.route("/").get((req, res) => {
    sciencequiz.find()
      .then(async (allScienceQuiz) => {
        if (!allScienceQuiz.length) {
          return res.json([]); // Handle empty database scenario
        }
  
        // Randomly select an index within the document count
        const randomIndex = Math.floor(Math.random() * allScienceQuiz.length);
  
        // Skip the random number of documents and limit to 10
        const randomSample = allScienceQuiz.slice(randomIndex, randomIndex + 10);
  
        res.json(randomSample);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({ message: "Error fetching Science quizzes" });
      });
  });
  

module.exports = router;