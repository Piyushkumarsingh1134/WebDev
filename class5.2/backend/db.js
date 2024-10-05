const mongoose=require("mongoose");


mongoose.connect("mongodb+srv://sulabhsamrat:Piyu%401134@cluster0.cf8exr2.mongodb.net/sul")

const todoscema=mongoose.Schema({
    title: String,
    description:String,
    completed:Boolean
})
const todo=mongoose.model('todos',todoscema);
module.export={
    todo
}