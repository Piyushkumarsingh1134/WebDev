const jwt=require("jsonwebtoken");

const value={
    name:"harkirat",
    accountnumber:123123
}
const token=jwt.generate(value,"secret");

console.log(token);