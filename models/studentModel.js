const db = require('../init/data');

exports.getAllStudents = (callback) => {
  db.query('SELECT * FROM students', callback);
};

exports.addStudent = (data, callback) => {
  const sql = 'INSERT INTO students (name, roll_number, class) VALUES (?, ?, ?)';
  db.query(sql, [data.name, data.roll_number, data.class], callback);
};

exports.deleteStudent = (id, callback) => {
  db.query('DELETE FROM students WHERE id = ?', [id], callback);
};
