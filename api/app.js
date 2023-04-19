import  express  from "express";
import mongoose from 'mongoose' 
import router from "./routes/userRoutes";
const app = express();

app.use("/api/users",router)

mongoose.connect("mongodb+srv://swift:pizza@cluster0.xcxo70e.mongodb.net/Fluxy?retryWrites=true&w=majority").then(()=>app.listen(500)).then(()=> console.log("Connected to Database")).catch((e)=> console.log(e))



app.listen(5000);
