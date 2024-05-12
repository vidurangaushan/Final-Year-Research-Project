const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const scienceSchema = new Schema({
    question: {
        type: String,
        required: true,
        trim: true
      },
    options: {
        type: [String],
        required: true,
        // validate: { // Custom validation for at least 2 options
        //   validator: (options) => options.length = 1,
        //   message: 'one options is required for a question.'
        // }
    },
    correctAnswer: {
        type: String,
        required: true
    }  
})


const sciencequiz = mongoose.model("Science_Quiz" , scienceSchema);

module.exports = sciencequiz;  