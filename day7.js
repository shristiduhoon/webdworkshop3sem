// class hello{
//     name="utkarsh"
//     show(){
//         console.log("hello "+this.name)
//     }
// }
// let h=new hello();
// h.show();
// class hello1{
//     constructor(name){
//         this.faculty="ud";
//     }
// }
// class hello2{
//     faculty="utkarsh"

// }
// let h2=new hello2();
// console.log(h2.faculty)
// class student{
//     constructor(rollNo,name,age){
//         this.rollNo=rollNo
//         this.name=name
//         this.age=age
//         console.log("Roll no. is "+this.rollNo)
//         console.log("Name is "+this.name)
//         console.log("Age is "+this.age)
//     }

// }
// let s=new student()
// let s1=new student(82,"utkarsh",29)
// let s2=new student(1,"geu",19)

// class hello3{
//     static name="example of static variable"
//     static show(){
//         console.log("Hello class this is "+hello3.name)
//     }
// }
// hello3.show()

// class hello4{
//     static name="example of static method and instance variable"
//     constructor(){
//         this.instanceVar="Instance variable"
//     }
//     show(){
//         console.log("Static variable "+hello4.name)
//         console.log("Instance variable "+this.instanceVar)
//     }
// }
// let h4=new hello4()
// h4.show()
// static and instance variable without constructor
// class hello5{
//     name="utkarsh"
//     static name="example "

//     show(){
//         console.log("Static variable "+this.name)
//         console.log("Instance variable " +instanceVar)
//     }
// }
// let h5=new hello5()

// h5.show()

// class student{
//     static count=0
//     constructor(rollNo,name,marks){
//         this.rollNo=rollNo
//         this.name=name
//         this.marks=marks
//         student.count++
//     }
//     displayResult(){
//         console.log("name: "+this.name)
//         console.log("rollno: "+this.rollNo)
//         console.log("marks: "+this.marks)

//         if(this.marks>=33){
//             console.log("name: "+this.name +" has passed")
//         }
//         else{
//             console.log("name: "+this.name +" has failed")
//         }
//     }
//     static totalcount(){
//         console.log("No. of student :"+student.count)

//     }
// }
// let s=new student(1,"sia",56)
// let s1=new student(4,"shri",89)
// let s2=new student(9,"sal",23)
// s.displayResult()
// s1.displayResult()
// s2.displayResult()
// student.totalcount()

class Bankaccount{
    constructor(accname,accNo,balance){
        accname=this.accname
        accNo=this.accNo
        balance=this.balance
    }
    withdraw(amount){
        if(this.amount<=this.balance){
            this.balance=this.balance-this.amount
            console.log("amount withrawn")
        }
        else{
            console.log("insufficient balance")
        }

    }
    deposit(amount){
      
        this.balance=this.balance+this.amount
        console.log("amount deposited") 
    }
    display(){
        console.log("balance : "+this.balance)
    }
}
let b=new Bankaccount("shristi",100678,3000)
b.deposit(8900)
b.withdraw(1200)
b.display()