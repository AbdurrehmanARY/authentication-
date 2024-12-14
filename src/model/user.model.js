import mongoose, { Schema } from "mongoose";
const usersSchema=new Schema(
{
name:{
    type:String,
    required:true,
    unique:true,
    lowercase:true,
    trim:true,
    index:true // for optimizing searching in DB
},
email:{
    type:String,
    required:true,
    unique:true,
    lowercase:true,
    trim:true,
},
// avatar:{
//     type:String,
//     required:true,
// },
// coverImage:{
//     type:String,
// },
password:{
    type:String,
    required:true,
    select:false
},
// refreshToken:{
//     type:String,
// },
createdAt:{
    type:Date,
    default:Date.now
}
},
// {
//     timestamps:true
// }
)
const users=mongoose.model('Users',usersSchema)
export default users  