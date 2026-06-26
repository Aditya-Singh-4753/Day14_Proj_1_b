const express=require("express");//Importing express
const app=express();//initializing express

//Creating objects
let students=[
    {id:1,name:"Nirmal",city:"Gorakhpur"},
    {id:2,name:"Aditya",city:"GKP"}
]

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("API is running");
});

//Data Retrieve

app.get("/students",(req,res)=>{
    res.json({
        message:"All Students",
        data:students
    });
});

//Data Store
app.post("/students",(req,res)=>{
    const {id,name,city}=req.body;
    const newStudent={id,name,city};
    students.push(newStudent);
    res.json({
        message:"Record Added",
        student:newStudent,
        data:students
    });
});

//Data Update
app.put("/students/:id",(req,res)=>{
    //const id=req.params.id;or
    const {id}=req.params;
    const student=students.find(s=>s.id==id);
    if(!students)
    {
        return res.status(404).json({
            message:"Studeent Not Found"
        });
    }
    student.name=req.body.name;
    student.city=req.body.city;

    res.json({
        message:"Record Updated",
        students
    });   
});

 //Data delete
 app.delete("/students/:id",(req,res)=>{
    const id=req.params.id;
    const student=students.find(s=>s.id==id);
    if(!students){
        return res.status(404).json({message:"Invalid ID"});
    }
    students=students.filter(s=>s.id!=id);
    res.json({
        message:"Record Deleted",
        students
    })
 })

app.listen(3000,()=>{
    console.log("Server Started");
});
 