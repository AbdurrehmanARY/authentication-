import Tasks from "../model/task.model.js"




// create tasks 

export const createTask=async(req,res)=>{
const {title,description}=req.body
try{await Tasks.create({
    title,description,user:req.user
})   
res.send({
    message:"task created"
})}
catch(err){console.log(err)}

}

//  show all tasks 
export const allTask=async(req,res)=>{ 
try{ 
    const allTasks=await Tasks.find({user:req.user._id})
if(!allTasks){
return(
    res.json({
        message:"no task found"
    })
)
}
    res.json({
    message:"All task ",
    allTasks
})}
catch(err){console.log(err)}
} 

//  update tasks
export const updateTask=async(req,res)=>{
    const {title,description}=req.body
   const {id}=req.params
   await Tasks.updateOne({_id:id},{title,description})
   
    res.json({
        message:"tasks updated successfully"
    })
}

// delete tasks
export const deleteTask=async(req,res)=>{
    const {id}=req.params
    await Tasks.deleteOne({_id:id})
     res.json({
         message:"tasks deleted successfully"
     })
 }





