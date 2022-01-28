const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;
const mysql = require('mysql2');
var movies = [];
// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'movies'
});
connection.query(
  'SELECT * FROM `movies`',
  function(err, results, fields) {
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  }
);
app.use(express.static('client/dist'));
app.use(express.json());
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

app.get('/api/movies', function (req, res) {
  res.send(movies);
});
app.post('/api/movies', function(req,res){
  console.log("receive data ", req.body);
  movies.push(req.body);
});
