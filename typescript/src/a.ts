// const x:number=1;
// console.log(x);
// function greet(Firstname:string){
//     console.log("hellow"+Firstname);
    
// }
// greet("harkirat");
// function sum(a:number ,b:number)
// {
//     return a+b;
// }
// const value=sum(1,2);
// console.log(valufunc
// function islegal(age:number){
//    if(age>18)return true;
//    else false;
// }
// // let x=islegal(19)

// function runafterone(fn:()=>void){
//     setTimeout(fn,1000);
// }
// runafterone(function(){
//  console.log("hi there");
 
// })
// interface user{
//     name:string,
//     age:number
// }
// function sumofage(user1:user ,user2:user){
//     return user1.age+user2.age
// };
// const age=sumofage({name:'piyu',age:20},{name:'pidud',age:321});
// console.log(age);
interface User {
    id: string;
    name: string;
    age: string;
    email: string;
    password: string; // Corrected 'passward' to 'password'
}

type updateprops=Pick<User,'name'|'age'|'email'>