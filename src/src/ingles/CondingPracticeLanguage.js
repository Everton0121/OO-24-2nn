 
const ev = require("readline-sync")

 const name = ev.question("what is your name?");
 const age = ev.question("how old are you? ");

console.log("helo," + name + "!");

if (age < 18){
    console.log("you are a teenager.");
}else{
    console.log("you are an adult.");}
