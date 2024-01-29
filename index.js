import  express  from "express";
import router from "./routes/routes.js";
import cors from "cors";
import dbconnection from "./database/dbconnection.js";

const app=express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/',router);
const PORT=8000;
dbconnection();
app.listen(PORT, ()=>{
    console.log(`server is runing ${PORT}`)
});