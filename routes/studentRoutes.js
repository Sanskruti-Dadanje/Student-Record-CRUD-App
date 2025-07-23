const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

router.get('/', studentController.getStudents);
router.post('/add', studentController.addStudent);
router.get('/delete/:id', studentController.deleteStudent);

module.exports = router;
