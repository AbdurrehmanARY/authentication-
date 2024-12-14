import express from "express";
import { createUser, deleteUser, getAllUser, login, logout, myProfile, newUser, register, updateUser } from "../controllers/user.controller.js";
import { isAuth } from "../middleware/auth.middleware.js";
export const router=express.Router()


router.get("/",(req,res)=>{
    res.send('working suucsee full')
})

// register router 
router.post("/register",register)
// login router 
router.get("/login",login)
// my profile route
router.get("/myProfile",isAuth,myProfile)
// logout route 
router.get("/logout",logout)















router.get("/new/:id",newUser)
router.get("/all",getAllUser) 
router.post('/create',createUser)
router.put('/update',updateUser)
router.delete('/delete/:id',deleteUser)


export default router