import mongoose from "mongoose"

const dbconnection =async()=>{
    const DB_URL=`mongodb+srv://user:file@cluster123.n6eplbu.mongodb.net/`
    try{
       await  mongoose.connect(DB_URL,{useNewUrlParser: true});
       console.log("database connected")
    }
    catch(error)
    {
           console.error("error while connect to db",error.message)
    }
}
export default dbconnection;