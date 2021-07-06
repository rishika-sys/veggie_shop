
const express =require("express");
const bodyParser=require("body-parser");

const app=express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
res.write("<h1>Products are added, Thank you for shopping !</h1>");
});
app.listen(3000,function()
{
  console.log("Server started running on port 3000");
});
