const express = require("express");
const bodyParser = require("body-parser");
const classValidator=require('class-validator');
const user=require('classValidator');
const app = express();

const userObject=new user();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set("view engine", "ejs");


app.get("/", (req, res) => {
  res.render("index");
});


app.post("/",validate, (req, res) => {
  console.log(req.body);
});

validate(userObject).then(errors => {
    if (errors.length > 0) {
      console.log('validation failed. errors: ', errors);
    } else {
      console.log('validation succeed');
      next();
    }
  });
// function validateForm(){
//         if (errors.length > 0) {
//           console.log('validation failed. errors: ', errors);
//         } else {
//           console.log('validation succeed');
//         }
//         next()
// }

app.listen(5000,()=>{
  console.log("server is running")
});
