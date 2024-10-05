const mongoose = require("mongoose")
const express = require("express")
const app = express()
app.use(express.json())
async function connectDb() {
    const res = await mongoose.connect("mongodb+srv://sulabhsamrat:Piyu%401134@cluster0.cf8exr2.mongodb.net/user_name");
   

    if(res) {
        console.log("connected");
    }


}

connectDb();

const userSchema = mongoose.Schema({
    username : String,
    password : String
});

const User = mongoose.model('User' , userSchema);

app.post("/signup" , async (req,res) => {
    const body = req.body;

    const newUser = new User({
        username : body.username,
        password : body.password
    });

    await newUser.save();

    res.json({
        msg : "successsful"
    })
})

app.listen(3000)