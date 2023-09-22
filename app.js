console.log("I love JavaScript");

// 1 . Find the frequncy of elements in array
// method using the reduce method of array
let arr = ["hello", "world", "java", "hello", "java"];
// console.log(arr)

function countWord(p) {
  let result = p.reduce((allNames, name) => {
    if (name in allNames) {
      allNames[name]++;
    } else {
      allNames[name] = 1;
    }
    return allNames;
  }, {});

  return result;
}

// console.log(countWord(arr))

// Closure

// A closure is function that references variable from its outer scope in its inner scope
// It can be defined as a combination of a function bundled up together withh reference wih its outer surrounding state( the lexical envirnoment)
// closure gives you accces to outrer function scope from inner function .
// lexical scope: A variable defined outside a function can be accessed from inside another function.

function subscribe() {
  var name = "elon musk";

  function Displayname(user) {
    // alert(name)
    console.log([name, user]);
  }
  return Displayname;

  //  Displayname()
}

// subscribe()('thanos')

function createBase(num) {
  return function (innerNum) {
    console.log(num + innerNum);
  };
}

const createBase2 = (num) => (innerNum) => console.log(num + innerNum);

// var addNum = createBase(6)
// addNum(6)
// addNum(100)

function find(index) {
  let a = [];
  for (let i = 0; i < 1000000; i++) {
    a[i] = i * i;
  }

  return function () {
    console.log(a[index]);
  };
}

// const closure = find()

// console.time("6");
// closure(6)
// console.timeEnd('6')

// Block scope and setTimeout

// let is block scope, var isnt
// for ( var i = 0 ; i < 4; i++){
//     function inner(i){
//         setTimeout( function log(){
//             console.log(i)
//         } , i * 1000)
//     }

//     inner(i)
// }

function counter() {
  var _counter = 0;

  function add(increment) {
    _counter += increment;
  }

  function retrieve() {
    return "Counter : " + _counter;
  }

  return {
    add,
    retrieve,
  };
}

const count = counter();

// count.add(90)
// console.log(count.retrieve())

// What is module pattern

var Module = (function () {
  function PrivateMethod() {
    console.log("private");
  }

  return {
    publicMethod: function () {
      console.log("public");
      // PrivateMethod()
    },
  };
})();

// Module.publicMethod()

let view;
function liketheVideo(user) {
  let called = 0;

  return function () {
    if (called > 0) {
      console.log("ALREADY subscribe to this");
    } else {
      view = "service";
      console.log("Subscribed to " + view + " " + user);
      called++;
    }
  };
}

// let isSubcribe = liketheVideo('thanos')
// isSubcribe()
// isSubcribe();
// isSubcribe();
// isSubcribe();

//polyfill
function once(func, context) {
  let ran;

  return function () {
    if (func) {
      ran = func.apply(context || this, arguments);
      func = null;
    }

    return ran;
  };
}

const hello = once((a, b) => console.log(`Hello ${a} ${b}`));
// hello(1 , 2)
// hello()

// momoize polyfill

function myMomoize(fn, context) {
  const res = {};

  return function (...args) {
    var argCached = JSON.stringify(args);

    if (!res[argCached]) {
      res[argCached] = fn.call(context || this, ...args);
    }
    return res[argCached];
  };
}

const clumsySquare = (num1, num2) => {
  for (let i = 1; i < 10000000; i++) {}

  return num1 * num2;
};

const clumzyMemomize = myMomoize(clumsySquare);
console.log(clumzyMemomize(9678, 7855));

// DIFFERENCE BEtween closure and scope
// c;osures are found inside of another function.
// scope is what variable you have acccess to

// currying is a function that takes one argumet at at time and returns a function that takes the next argument
// Number of arguments is dependent of the number of nested functions
// Example f(a,b) & f(a)(b)
function f(a) {
  return () => `${a} ${b}`;
}

function fn(a) {
  return function (b) {
    return `${a} ${b}`;
  };
}
// console.log(fn(70)(8))

//why do we use curring?
//1.) To create higher order functions
//2.) To avoid passing the same variable over and over again

const sum = (a) => (b) => (c) => a + b + c;

function sum1(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
// console.log(sum1(50)(50)(50))

function evaluate(operation) {
  return function (a) {
    return function (b) {
      if (operation === "sum") return a + b;
      else if (operation === "multiply") return a * b;
      else if (operation === "division") return a / b;
      else if (operation === "subtraction") return a - b;
      else return "Invalid operation";
    };
  };
}

// console.log(evaluate('division')(100)(20))

// Infinite currying
function add(a) {
  return function (b) {
    if (b) return add(a + b);
    return a;
  };
}

// console.log(add(2)(2)())

// Manipulating DOM //
function updateElementText(id){
    return function(content){
        document.querySelector(`#${id}`).textContent = content
    }
}

// const updateHeader = updateElementText('heading')
// updateHeader('jj')

//covert fn(4,5,8) to fn(4)(5)(8)

function curry(func){
    return function curriedFunc(...args){
        console.log(args.length , func.length)
        if(args.length >= func.length){
            return func(...args)
        } else {
            return function (...next){
                return curriedFunc(...args , ...next)
            }
        }
    }
}

const Sum = (a , b , c , d )  => a * b * c * d

const totalSum = curry(Sum)
console.log(totalSum(2)(2)(4)(5))

