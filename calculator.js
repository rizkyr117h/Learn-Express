const express = require("express");
const app = express();
const bodyParser = require("body-parser")


app.get("/", function(request,response){
    response.sendFile(__dirname + "/index.html")
})
app.use(bodyParser.urlencoded({extended: true}))


app.get("/bmicalculator", function(req,res){
    res.sendFile(__dirname + "/bmiCalculator.html")
})

app.post("/bmicalculator", function(req,res){
    var weight = parseFloat(req.body.weight)
    var height = parseFloat(req.body.height)

    var bmi = weight / (height*height)

    res.send("Your BMI is " + bmi)
})
var height = 0
var weight = 0


app.listen(3000, function(){
    console.log("Server Started on port 3000")
});
