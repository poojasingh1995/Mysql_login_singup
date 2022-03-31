var mysql = require('mysql');
var user = require("readline-sync")

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Pooja@123",
  database: "mysql_login_singup"
});

// con.connect(function(err) {
//   console.log("Connected!");
//   con.query("CREATE DATABASE mysql_login_singup", function (err, result) {
//     if (err){;
//       console.log("Database already created")
//     }else{
//     console.log("Database created");
//     }
//   });
// });
// var sql = "CREATE TABLE table_login_singup (id INT AUTO_INCREMENT PRIMARY KEY ,username VARCHAR(255), password VARCHAR(255),email VARCHAR(255))";
// con.query(sql, function (err, result) {
//   if (err){
//       console.log("already table created");
//   }
//   else{
//       console.log("table created")
//   }
// });

const emailvalidator = require("email-validator")
var input = user.question("What Do You Want Login or Singup:-")
if (input == "singup") {
  username = user.question("enter the user name:-")
  Email = user.question("enter the email_id:-")

  if (emailvalidator.validate(Email)) {
    console.log("email is valid")
    password = user.question("create your password")
    passwd = (/^[a-zA-Z0-9!@#$%^&*]{6,16}$/)
    if (password.match(passwd)) {
      confirmpasswrod = user.question("confirmed password")
      if (password == confirmpasswrod) {
        console.log("confirm password")
        console.log("congrates" + username + "you are singup successfully")
        var sql = "INSERT INTO table_login_singup (username, password,Email) VALUES ?";
        var values = [[username, password, Email]]
        con.query(sql, [values], function (err, result) {
          if (err) {
            console.log("error");
          } else {
            console.log("data inserted"+result.affectedRows)
          }
        })
      }
    }
  }
  else {
    console.log("your email is not valied")
  }
}
else {
  if (input == "login") {
    var username_2 = user.question("enter the user name:-")
    var password_2 = user.question("enter the email id:-")
}
con.connect(function(err){
  if (err) throw err;
  con.query("SELECT * FROM table_login_singup", function (err, results, fields) {
    if (err) {
      console.log(err)
    }
    else {
      console.log(results)
    }
    var found = results.find(function (input) {
      if (input.username== username_2 && input.password == password_2) {
        return input
      }
    })
    if (found){
      console.log("login successfully")
      console.log(found)
    }
    else{
      console.log("user not found")
    }
  })  
})

    // var input = user.question(" Do You Want to update yes/no:-")
    // if (input == "yes") {
    //   var username_3 = user.question("enter the user name who update you:-")
    //   var Email_3 = user.question("enter the email id who update you:- ")
    //   var password_3 = user.question("enter the email id who update you:- ")
    //   var sql = `UPDATE table_login_singup SET  password=${password_3} WHERE password = ${password_2}`;
    //   con.query(sql, function (err, result) {
    //     if (err) throw err;
    //     console.log(result.affectedRows + " record(s) updated");
    //   });
    // }
    // })
// }
    // });
  // }

// var sql = "UPDATE table_login_singup SET username = 'Canyon',email='Usha@gmail.com' WHERE password = 'Pooja@123'";
// var sql = `UPDATE table_login_singup SET username =${username},email=${Email}`;
// con.query(sql,function (err, result) {
//   if (err) throw err;
//     console.log(result.affectedRows + " record(s) updated");
//   });

// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM table_login_singup WHERE password = 'Pooja@123 '", function (err, result) {
//     if (err) throw err;
//       console.log(result);
//     });
// });

// var sql = "DELETE FROM table_login_singup WHERE username = 'kirtee'";
// con.query(sql, function (err, result) {
//   if (err) throw err;
//     console.log("Number of records deleted: " + result.affectedRows);
//   })
}