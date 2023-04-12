import  express  from "express";
import mongoose from 'mongoose'

const app = express();

mongoose.connect("mongodb+srv://swift:pizza@cluster0.xcxo70e.mongodb.net/Fluxy?retryWrites=true&w=majority").then(()=>app.listen(500)).then(()=> console.log("Connected to Database")).catch((e)=> console.log(e))
app.use("/", (req,res,next)=> {
    res.send("hello world")
});

app.listen(5000);
