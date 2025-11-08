import express from 'express';
const app = express();

app.get("/", (req,res)=>{
    res.send("<h1>Hello Word This is Work</h1>");
});

app.listen(3000, ()=>{
    console.log("Port Run 3000");
    
})