"use strict";
// const x:number=1;
// console.log(x);
// function greet(Firstname:string){
//     console.log("hellow"+Firstname);
function sumofage(user1, user2) {
    return user1.age + user2.age;
}
;
const age = sumofage({ name: 'piyu', age: 20 }, { name: 'pidud', age: 321 });
console.log(age);
