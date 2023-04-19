import  express  from "express";
import mongoose from 'mongoose' 
import router from "./routes/userRoutes";
import bodyParser from 'body-parser';
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/users",router)


mongoose.connect("mongodb+srv://swift:pizza@cluster0.xcxo70e.mongodb.net/Fluxy?retryWrites=true&w=majority").then(()=>app.listen(500)).then(()=> console.log("Connected to Database")).catch((e)=> console.log(e))



app.listen(5000);
