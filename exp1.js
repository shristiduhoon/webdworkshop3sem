// class name should be in capital
//require will fetch the module events

const EventEmitter=require('events')
// const A=new EventEmitter()
// A.on('greet',(name)=>{
//     console.log(`Hello there ${name}`)
// })
// A.on('exit',(num)=>{
//     console.log(`thanqu for visiting ${num}`)
// })
// A.emit('greet','shristi')
// A.emit('exit','us')


// class Button extends EventEmitter{
//     click(){
//         // console.log('Button was clicked')
//         this.emit('click')
//     }
// }
// const button=new Button()
// button.on('click',(event=>{
//     console.log('Button clicked')
// }))
// button.click()


// class Button extends EventEmitter {

//     click() {
//         console.log('Button was clicked');

//         this.emit('click', {
//             timestamp: Date.now()
//         });
//     }
// }

// const button = new Button();

// button.on('click', (event) => {
//     console.log(`click event fired at ${event.timestamp}`);
// });

// button.click();


console.log('start')
setTimeout(()=>{
    console.log("timeout")
},2000)
setImmediate(()=>{
    console.log("Immediate")
})
process.nextTick(()=>{
    console.log("Next Tick")
})
console.log("Exit")
