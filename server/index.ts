import express from "express";
const app = express();

app.get("/",(req, res)=>{
    res.send("");
})

const PORT = process.env.PORT;
app.listen((PORT||3000), () => {
    console.log(`Listening on port ${PORT||3000}`)
})