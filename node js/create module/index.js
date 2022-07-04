// improting circle.js
const fs = require('fs');
// ------------------------------- importing module -------->
const path = './circle.js';
const circle = require(path);   
// console.log(circle)
const rect = require('./module.js')
// console.log(rect)
// --------------------------------------------------
console.log(circle.calculateArea(2));


// due to function wrapper , all the exports are in this file. 

// ---------------------------------- IIFE -- 
// its self calling function 
// can be made. 
// (function print(str){
//     console.log(str)
// }) ("hello")


console.log(`the area = ${rect.area(2,3)}`);

