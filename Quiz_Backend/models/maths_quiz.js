const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mathsSchema = new Schema({
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

const mathsquiz = mongoose.model("Maths_Quiz" , mathsSchema);

module.exports = mathsquiz;  