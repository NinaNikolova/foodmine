import express from "express";
import cors from "cors";
const app = express();

// localhost:4200
// localhost:5000
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

app.get("/app/foods", (req, res)=>{
    res.send("hello world")
});
const port = 5000;
app.listen(port, ()=>{
    console.log("Website served on http://localhost:"+port)
})