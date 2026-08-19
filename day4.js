console.log("----String Object-----")
let name="utkarsh"
console.log(name)
console.log("Length=",name.length)

console.log("----String Methods-----")
let str="Welcome javascript"
console.log("Uppercase=",str.toUpperCase())
console.log("Lowercase=",str.toLowerCase())
console.log("Charater at index index 3 =",str.charAt(3))
console.log("Index of java=",str.indexOf("java"))
let message="Javascript is easy.Javascript is powerful"
console.log("Last Index=",message.lastIndexOf("Javascript"))
console.log("Slice=",str.slice(0,7))
let data="HTML,CSS,JAVASCRIPT"
let result=data.split(",")
console.log("Split=",result)
let ans=message.split("i")
console.log("Split=",ans)
let text="I love Java"
console.log(text.replace("Java","you"))

let first="uttara"
let last="anna"
console.log(first.concat(" ",last))

console.log("---Include----")
let course="JavaScript"
console.log(course.includes("Script"))
console.log(course.includes("Python"))

console.log("----Array----")
let student=[{id:101},{"name":"ud"}]
let number=[1,2,8,4]
number.push(70)
console.log(number)
number.push(33)
number.push(79)
number.pop()
console.log(number)
number.unshift(5)// it adds 5 to starting
console.log("After unshift=",number)
number.shift()//it removes the first index element
console.log("After shift=",number)

console.log("-----Date-----")
let date =new Date();
console.log(date)
console.log("Year=",date.getFullYear())
console.log("Month=",date.getMonth())
console.log("Date=",date.getDate())

console.log("-----Math object------")
console.log("PI=",Math.PI)
console.log("Round=",Math.round(2.8))
console.log("Maximum=",Math.max(3,8,10,6,7))
console.log("Minimum=",Math.min(3,8,10,6,7))
console.log("Floor=",Math.floor(4.9))
console.log("Ceil=",Math.ceil(4.7))
console.log("Square root=",Math.sqrt(81))
console.log("Power=",Math.pow(7,2))