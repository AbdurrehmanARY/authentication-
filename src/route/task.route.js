import express from "express"
import { allTask, createTask, deleteTask, updateTask } from "../controllers/task.controller.js"
import { isAuth } from "../middleware/auth.middleware.js"

export const router=express.Router()


router.post("/create",isAuth,createTask)
router.get("/:id",isAuth,allTask)
router.put("/update/:id",isAuth,updateTask)
router.delete("/delete/:id",isAuth,deleteTask)


