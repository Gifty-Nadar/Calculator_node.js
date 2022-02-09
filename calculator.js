const express = require("express");

const bodyParser = require("body-parser");//works with express and its done after the post action from the home route

const app = express();

app.use(bodyParser.urlencoded({extendend: true}))// mandatory code whenever using body-parser

app.get("/", function(req,res){
res.sendFile(__dirname+"/index.html");//sends entire file of to the server (only do this after making the html file)
});//__dirname tells the proper path and /index.html tells that your entire html file is located in full path of your device


// .post() = acts as a post request that comes to the home route(/)
app.post("/", function(req, res){
var num1 = Number(req.body.n1); // to make text into number form in js use Number()
var num2 = Number(req.body.n2);
var result= num1 + num2;
res.send("The result of the calculation is " + result);
});

app.listen(3000, function(){
  console.log("Server is running on port 3000");
});
