const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root", 
  password: "root", 
  database: "hola",  
});

connection.connect(function (error){
  if(!error){
    console.log('connection to hola was created successfully');
  }
  else {
    console.error()
  }
})

module.exports = connection