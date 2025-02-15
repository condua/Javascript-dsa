// var myVariable = 'I am at the Global scope';
// var myFunction = function() {
//     console.log('me too');
// }
// myFunction();

function one() {
    return 'one';
}
let value = one;
console.log(one());
// console.log(value);
// console.log(typeof value);

//string 
//number 
//boolean
//undefined
//function

function two() {
    return function() {
        console.log('two');
    }
}
let myFunct = two();
myFunct();

function three() {
    return function() {
        return [1, 2];
    }
}
// tham chieu

let myFunct2 = three()();
console.log(myFunct2);