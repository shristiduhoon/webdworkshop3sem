
//task 2
// function checknumber(num){
//     if(num%2==0){
//         console.log(num+" is a even number.");
//     }
//     else{
//         console.log(num+" is a odd number.")
//     }
// }
// var x=78;
// checknumber(x);

//task 1
// let obj={name:"Shristi",id:101,branch:"aiml",department:"cse"};
// for (let i in obj){
//     console.log(i+":"+obj[i]);
// }

//task3
// function calpercentage(maths,eng,science){
//     var sum=maths+eng+science;
//     return (sum/300)*100;
// }
// console.log("Percentage:"+calpercentage(78,99,88)+"%");

// let arr=[107,201,330,500];
// let sum=0;
// for(let i=0;i<arr.length;i++){
//     sum+=arr[i];
// }
// console.log(sum);

// console.log("------2D ARRAY------");
// let student=[
//     ["Shristu","Duhoon",18,192],
//     ["Saloni ","karn",20,167],
//     ["Ayushi","agarwal",19,399]
// ]
// for(let i=0;i<Array.length;i++){
//     console.log(student[i]);

// }
//console.log(object)
// const std={name:"shristi",id:100,course:"node.js"};
// console.log(std);
// console.log(std.name);
// console.log(std.id);
 
// console.log("----array of object-----")
// const user=[{id:1,name:"akanksha"},{id:2,name:"aditya"},{id:3,name:"savitri"}];
// console.log(user)

// const employee={
//     id:101,name:"tejaswi",department:"cse-aiml",
//     display : function(){
//         console.log("ID=",this.id);
//         console.log("Name=",this.name);
//         console.log("Department=",this.department);

//     }
// };
const std={id:101,name:"kashish"};
console.log(std);
std.course="cse";
console.log(std);
delete std.name;
console.log(std);