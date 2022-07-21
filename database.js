var mysql = require("mysql");


var con = mysql.createConnection({
    host: 'localhost',
    database: 'amitdb',
    user: 'root',
    password: 'root123',  
    });
   
    con.connect(function(err) {
        let sql = "SELECT id FROM amitdb.grades";
        if (err) throw err;
        console.log("Connected!");
        con.query(sql, function (err, result) {    
            if (err) throw err;
            console.log(result);
          });
      });
      

module.exports = con;