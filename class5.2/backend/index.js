const express=require("express");
 const {createTodo,updateTodo}=require("./type");
const app=express();
const{todo}=require("./db");
app.use(express.json());

app.post("/todo",async function(req,res){
 const createPayload=req.body;
 const parsePayload=createTodo.safeParse(createPayload);
 if(!parsePayload.success){
    res.status(411).json({
        msg:" you sent the wroong input"
    })
    return;
 }
  await todo.create({
    title:createPayload.title,
    decription:createPayload.description,
    completed:false

})
res.json({
    msg:"todocreated"
})
})
app.get("/todo",async function(req,res){
    const todos= await todos.find();
    res.json({
        todos
    })
    
})
app.put("/completed", async function(req, res) {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }

    await todo.update({
        _id: req.body.id
    }, {
      completed: true  
    })

    res.json({
        msg: "Todo marked as completed"
    })
})

app.listen(3000);

