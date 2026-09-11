// function sum(...num){
//     sum=0
//     sum=sum+num
//     return sum
// }
// sum(1,2,3,4) // we can't directly pass array as parameter so we are using rest operator
// function sum(name,...args){
//     let total=0
//     for(let i of args){
//         total=total+i;
//     }
//     console.log("Hello"+name)
//     console.log("total"+total)

// }
// sum("shristi",1,9,5,7)

function sumn(...value){
    let total=0
    for(let i in value){
        total=total+Number(values[i])

    }
    console.log("total"+total)
    
}
let numbers=parseInt(prompt("enter number seperated by commas"))
let arr=numbers.split(" ").map(Number)
sumn(...arr)
