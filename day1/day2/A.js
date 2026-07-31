// console.log("=====Variable=====");
// var first ="Shristi";
// var last ="Duhoon";
// console.log(first +" "+last);

// console.log("\n =====If Else =====")
// var a=40;
// var b=70;
// if(a>b){
//     console.log("a is greater,value of a is "+a);
// }
// else{
//     console.log("b is greater,value of b is "+b);
// }

// console.log("\n ======Function ======")
// function abes(){
//     console.log("Welcome Students");
//     console.log("Enjoy your time here");
// }
// abes();

// console.log("\n ======Function with parameters ======")
// function greet(fname,lname){
//     console.log("Hello",fname,lname);
// }
// greet("Shristi","Duhoon");
// greet("Saloni","Karn");

// console.log("\n ======Function Return ======")
// function add(x,y){
//     return x+y;
// }
// var result=add(30,80);
// console.log("Sum= "+result);

// console.log("\n ======Default Arguments ======")
// function fullname(fname="ABES",lname="Engineering College"){
//     return fname+" "+lname;
// }
// console.log(fullname());
// console.log(fullname("Shristi","Duhoon"));

console.log("\n ====== Percentage ======")
function totalmarks(math,english,science){
    return math+science+english;
}
function percentage(total){
    return (total/300)*100;
}
var total=totalmarks(85,86,95);
console.log("Total marks: "+total);
console.log("Percentage: "+percentage(total)+"%");
