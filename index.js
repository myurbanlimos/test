import express from 'express';
const app = express();

app.get("/", (req,res)=>{
    res.send("<h1>Hello Word This is Work</h1>");
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Server running on port ${PORT}`);
});
