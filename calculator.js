//jshint esversion:6
const express = require('express');
const bodyparser = require('body-parser');
const app = express();

app.use(bodyparser.urlencoded({extended:true}));

app.get("/",function(req,res)
{
  res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req,res)
{
  var h = Number(req.body.height);
  var w = Number(req.body.weight);
  var bmi = w / (h*h) ;
  res.send("Your BMI is :" + bmi);
});

app.listen(3000,function()
{
  console.log("App running at port 3000");
});
