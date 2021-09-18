const mongoose = require('mongoose');

// function QuizSchema(add) {
//   var schema = new mongoose.Schema(
//     {
//       question: String,
//       CorrectAns: String,
//     },
//     {
//       versionKey: false, // You should be aware of the outcome after set to false
//     }
//   );

//   if (add) {
//     schema.add(add);
//   }

//   return schema;
// }

// const MultipleQuizSchema = new QuizSchema({
//   answer1: String,
//   answer2: String,
//   answer3: String,
//   answer4: String,
// });

// const FillQuizSchema = new QuizSchema();

const QuizSchema = mongoose.Schema(
  {
    question: String,
    answer: String,
  },
  {
    versionKey: false, // You should be aware of the outcome after set to false
  }
);

module.exports = mongoose.model('Quizs', QuizSchema);
