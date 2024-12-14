import mongoose, { Schema } from "mongoose";
const taskSchema=new Schema(
{
title:{
    type:String,
    required:true,
},
description:{
    type:String,
    required:true,
},
isCompleted:{
    type:Boolean,
default:false,
},
user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Users",
    required:true
},
createdAt:{
    type:Date,
    default:Date.now
}
}
)
const Tasks=mongoose.model('Tasks',taskSchema)
export default Tasks  