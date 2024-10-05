console.log("hello");
const user1={
    firstname:"harkirat",
    gender:"male"
}
console.log[users1["gender"]];
function sum(a,b){
    return a+b;
}
function cal(a, b, type) {
    if (type == "sum") {
        return a + b;
    }
    if (type == "minus") {
        return a - b;
    }
}

const value = cal(1, 2, "sum");
console.log(value);
function myownsettimeeout(calllback,duratioon)
{
    setTimeout(calllback,duratioon);

}

myownsettimeeout(function(){
})


fs.readFile("a.txt","utf-8", function(err,data){
    console.log(data);
})
console.log("hello");
const fs=require("fs");
function readfilesulabh(){
    return new Promise(function(resolve)  {
        fs.readFile("a.txt","utf-8", function(err,data){
         resolve(data);
        });
    })
}

function ondone(data){
    console.log(data);
}
readfilesulabh().then(ondone);

