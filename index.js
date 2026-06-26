const express=require("express");
const app=express();

let students=[
    {id:1,name:"Nirmal",city:"Gorakhpur"},
    {id:2,name:"Aditya",city:"GKP"}
]

app.use(express.json());
app.get("/",(req,res)=>{
    res.send("API is running");
});

app.get("/students",(req,res)=>{
    res.json({
        message:"All Students",
        data:students
    });
});

app.listen(3000,()=>{
    console.log("Server Started");
});
 