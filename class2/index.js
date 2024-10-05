const express = require('express');
const app = express();
const port = 3000;
// const Zod=require("zod");

//  const schema=Zod.array(Zod.number());
// app.use(express.json());

// // function calculatesum(n) {
// //   let ans = 0;
// //   for (let i = 1; i < n; i++) {
// //     ans += i;
// //   }
// //   return ans;
// // }

// // app.get('/', (req, res) => {
// //   const n = req.query.n;
// //   const ans = calculatesum(n);
// //   res.send(ans.toString());
// // });
// const users = [{
//   name: "john",
//   kidneys: [{
//     healthy: false
//   }]
// }];
// app.get('/', (req, res) => {
//   const johkidneys = users[0].kidneys;
//   const numberofkidneys = johkidneys.length;
//   let numofhealthy = 0;
  
//   for (let i = 0; i < johkidneys.length; i++) { // Changed from i<=johkidneys.length to i<johkidneys.length
//     if (johkidneys[i].healthy) {
//       numofhealthy++;
//     }
//   }
  
//   const numberofunhealthy = numberofkidneys - numofhealthy;
//   res.json({
//     numberofkidneys,
//     numberofunhealthy,
//     numofhealthy
//   });
// });
// app.post('/', (req, res) => {
//   const ishealthy = req.body.ishealthy;
//   users[0].kidneys.push({
//       healthy: ishealthy
//   });
//   res.json({
//       msg: "done"
//   });
// });
// app.put("/",(req,res)=>{
//   for(let i=0; i<users[0].kidneys.length(); i++){
//     users[0].kidneys[i].healthy=true;
//   }
//   res.json({});
// })
// const schema =Zod.array.object({
//       email:Zod.string(),
//       passward:z.string(),
//       country:Z.literal("in")
// })
// app.post("/healthchekup",function(req,res){
//     const kidneys=req.body.kidneys;
//     const response=schema.safeParse(kidneys)
//     res.send({
//       response
//     })
// });
//  function sum(a,b){
//   return a+b;
//  }

//  const sum=(a, b)=>{
//   return a+b;
//  }



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
