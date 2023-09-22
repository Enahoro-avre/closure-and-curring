// 1 what is a function expression
// ans: Thisis when you store a function in a variable , This can also be called an anonymous function

const square = function (num) {
     return num * num 
}

// console.log(square(5))

// 2 . what are first class functions
// ans: These are functions that can be passed as variable.

function displaySquare(num , fn) {
    console.log(`Square of ${num} is ${fn(num)}`)
}

// displaySquare(5 , square) // Note the square function returns an single value

// .   what is IIFE
// ans : Immedietly invoved function

(function Square(num){
    console.log(num * num)
})

// (function (x){
//     return (function(y){
//         console.log(x)
//     })(2)
// })(1)

// what is function scope ?

function loop() {
    for(let i = 0 ; i < 5 ; i++){
        setTimeout(()=>{
            console.log(i)
        },(i * 1000))
    }
}
// let has the block scope , var doesnt , for every iteration of the for loop it triggers the setTimeOUt funcion
//loop()

// function hoisting 

// params vs arguments
function multiply(num){ // params
    return num + num
}

// multiply(8) // arguments

function Multiply(num1 , num2){
    console.log(num1 * num2)
}

function Multiply2(...num) { //rest operators
  console.log(num[0] * num[1]);
}

var arry = [ 20 , 20]

//Multiply(...arry) // spread operators
//Multiply2(...arry); 

function fn(a , x , y , ...numbers) { // rest  operators must always be the last params
    console.log(x , y , numbers)
}

// fn(2,4,6,7,8,9)


// What is a callback function?
// ans: A callback function is function passed in another function a s an argument, which is involved from the outer function

function greetings (person){
    console.log(`Good morning ${person}`)
}

function Exponent (text , callback) {
    console.log('exponent is cool')

    callback(text)
}

// Exponent('DAVID' , greetings)

// Difference between arrow func and normal func
//1. you cant accces the argument keywords in arrow func

let user = {
  userName: "Almighty Thanos",
  rc1: () => {
    console.log("Subscribe to " + this.userName); // You cant acccess this keyword inside an arrow functions
  },
  rc2() {
    console.log("Subscribe to " + this.userName
    );
  },
};

// user.rc1()
// user.rc2()