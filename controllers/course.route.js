const express = require('express');
const router = express.Router();
const Course = require('../models/courses.models');
const Quiz = require('../models/quizs.models');
const mongoose = require('mongoose');

router.get('/', async function (req, res) {
  const courses = await Course.find();
  console.log(courses);
  res.json({ courses });
});
router.get('/:id', async function (req, res) {
  const id = req.params.id;
  console.log(id);

  const quizs = await Quiz.find({
    courseID: mongoose.Types.ObjectId(id),
  });
  res.json({ quizs: quizs });
});
router.post('/:id', async function (req, res) {
  const id = req.params.id;
  console.log(id);

  const answer = req.body.answer;
  const quizs = await Quiz.find({
    courseID: mongoose.Types.ObjectId(id),
  });
  const checkAnswer = answer.map((answer) => {
    return (
      quizs.filter(function (quiz) {
        return quiz._id == answer._id && quiz.answer === answer.answer;
      }).length > 0
    );
  });
  console.log(checkAnswer);
  let point = 0;
  checkAnswer.map((result) => {
    point += result;
  });
  console.log(point);
  res.json({ point, total: checkAnswer.length });
});
module.exports = router;
