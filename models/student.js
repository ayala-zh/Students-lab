const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  major: { type: String, required: true },
  enrolled: { type: Boolean, default: true },
});

const Student = mongoose.model('Student', studentSchema);

// CRUD Operations
async function insertStudents() {
  const students = [
    { name: 'Beyonce', age: 21, major: 'Computer Science', enrolled: true },
    { name: 'Lady Gaga', age: 22, major: 'Mathematics', enrolled: false },
    { name: 'Bruno Mars', age: 23, major: 'Physics', enrolled: true },
  ];

  return await Student.insertMany(students);
}

async function findAllStudents() {
  return await Student.find();
}

async function findStudentByName(name) {
  return await Student.findOne({ name });
}

async function findEnrolledStudents() {
  return await Student.find({ enrolled: true });
}

async function updateStudent(name, updateFields) {
  return await Student.findOneAndUpdate({ name }, updateFields, { new: true });
}

async function deleteStudent(name) {
  return await Student.deleteOne({ name });
}

async function deleteUnenrolledStudents() {
  return await Student.deleteMany({ enrolled: false });
}

module.exports = {
  Student,
  insertStudents,
  findAllStudents,
  findStudentByName,
  findEnrolledStudents,
  updateStudent,
  deleteStudent,
  deleteUnenrolledStudents,
};
