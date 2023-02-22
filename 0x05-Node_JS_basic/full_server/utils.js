const fs = require('fs');

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.split('\n');
        const students = lines.slice(1, -1);
        const obj = {};

        students.forEach((student) => {
          const data = student.split(',');
          const field = data[data.length - 1];

          if (!obj[field]) {
            obj[field] = [];
          }
          obj[field].push(data[0]);
        });

        resolve(obj);
      }
    });
  });
}

export default readDatabase;
module.exports = readDatabase;
