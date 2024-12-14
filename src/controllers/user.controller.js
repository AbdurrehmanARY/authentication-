
import { User } from '../model/index.js'
import bcrypt from  'bcrypt'
import users from "../model/user.model.js"
import jwt from "jsonwebtoken"
import { sendCookie } from '../utils/feature.js'


export const getAllUser=async(req,res)=>{
    //   res.send('all user')
      const newUser=await User.find({})
      console.log(newUser)
      res.json({
        message:"user created successfully",
        data:newUser
    }) 
    }

// Register controller 

export const register=async(req,res)=>{
    const {name,email,password}=req.body
try{
    // check user is already exist or not

const userExist=await User.findOne({email})
if(userExist){return ( res.status(404).json(
    {
        success:'false',
        message:'user already exist',
    }
))
}
else{
       //    password to be hashed    

       const hashedPassword= await bcrypt.hash(password,10)

       //    store to database

       let user=await users.create({
       name,email,password:hashedPassword
       })
       sendCookie(user,res,"register successfully",202)
}
}
catch(err){console.log(err)}
}

// Login controller 

export const login=async(req,res)=>{
    const {email,password}=req.body
try{ // get user or email from DB
    const user=await User.findOne({email})
    // check user or email exist or not 
 
    if(!user){
res.status(404).json({
    success:false,
    message:'user not found'
})
}else{
    // check password is match or not 
const isMatch=await  bcrypt.compare(password,user.password)
    if(!isMatch){
        res.status(404).json({
            success:false,
            message:'password is invalid'
        })
        }else{
        sendCookie(user,res,`welcome #${user.name}`,200)
        }
}}
catch(err){console.log(err)}
}

// logout controller 
export const logout=async(req,res)=>{
    res.cookie('token','',{
    expires:new Date(Date.now()),
    sameSite:process.env.NODE_ENV==="DEVELOPMENT" ?"lax":"none"  ,
    secure:process.env.NODE_ENV==="DEVELOPMENT"   ? false : true
    }).json({
    message:"logout successfully"
    })
}
export const myProfile=async (req,res)=>{

    res.json(
    {
    message:'my profile',
    user:req.user
    }
)
}

