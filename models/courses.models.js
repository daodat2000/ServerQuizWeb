const mongoose = require('mongoose');

const CourseSchema = mongoose.Schema(
  {
    name: String,
    description: String,
  },
  {
    versionKey: false, // You should be aware of the outcome after set to false
  }
);

module.exports = mongoose.model('Courses', CourseSchema);
