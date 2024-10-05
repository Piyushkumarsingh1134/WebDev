const express = require("express");
const app = express();
function isoldenough(age){
    if(age>=14){
        return true;
    }
    else{
        return false;
    }
}
function isoldenoughmidelware(req,res,next){
    if(age>=14){
        next();
    }
    else{
        res.json({
            msg: "you have successfully booked a ride"
        });
    }
}
app.use(isoldenough);

app.get("/ride1", isoldenoughmidelware,function (req, res) {
   
    res.json({
        msg: "you have successfully booked a ride"
    });

    else{
        res.jsom({
            msg:"beta bap se chala"
        });
    }
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
