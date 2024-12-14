import mongoose from "mongoose";
import { DB_NAME } from "../../constant.js";

const connectDb=async()=>{
    try{
const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
console.log(`database is connected`)


    }
    catch(error){
        console.log('mongo db connection error',error)
    }

}
export default connectDb;