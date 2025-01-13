const mongoose = require('mongoose');
const {
  insertStudents,
  findAllStudents,
  findStudentByName,
  findEnrolledStudents,
  updateStudent,
  deleteStudent,
  deleteUnenrolledStudents,
} = require('./models/student');

mongoose.connect('mongodb://127.0.0.1:27017/studentDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

async function run() {
  await insertStudents();
  console.log(await findAllStudents());
  console.log(await findStudentByName('Beyonce'));
  console.log(await findEnrolledStudents());
  console.log(await updateStudent('Beyonce', { major: 'Mathematics' }));
  console.log(await deleteStudent('Bruno Mars'));
  console.log(await deleteUnenrolledStudents());
}

run();
