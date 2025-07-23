const Student = require('../models/studentModel');

exports.getStudents = (req, res) => {
  Student.getAllStudents((err, results) => {
    if (err) throw err;
    res.render('index', { students: results });
  });
};




exports.addStudent = (req, res) => {
  const { name, roll_number, class: studentClass } = req.body;
  const data = { name, roll_number, class: studentClass };
  console.log(data);

  Student.addStudent(data, (err) => {
    if (err) {
      if (err.code === 'ER_DUP_ENTRY') {
       
        return res.status(400).send('Roll number already exists!');
      }
      
      return res.status(500).send('Server error!');
    }

    res.redirect('/');
  });
};


exports.deleteStudent = (req, res) => {
  const id = req.params.id;
  Student.deleteStudent(id, (err) => {
    if (err) throw err;
    res.redirect('/');
  });
};
