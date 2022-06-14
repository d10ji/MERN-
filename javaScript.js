//hoisting
// -------------------------------------->
//Anonymous function with default arguments (Interoduced in ES6)
// const  multiply = function (mul=1){ //if No arguments then assign 1.
//     for(let i = 1; i<=10; i++)
//     {
//         console.log(`${mul} x  ${i} = ${mul*i}`);
// }
// }
// multiply(8);

// --------------------------------------------------------->


// //Arrow Function
// // No functin keyword.
// // only call and from function expression 

// const  multiply = (mul=1) => { //if No arguments then assign 1.
//     for(let i = 1; i<=10; i++)
//     {
//         console.log(`${mul} x  ${i} = ${mul*i}`);
// }
// }
// multiply(8);


// -------------------------------------------------------------->
// const doubleTheNum = (num) => {
//     return num*2;
// }
// let result = doubleTheNum(10);
// console.log(`double of ${num} is ${result}`);






//-------------Arrays------------------------------->
// For in --------> gives indexies


// var furits =['manago','kiwi','apple', 'grape']

// for ( furit in furits)
// {
//     console.log(furit);
// }
 
// // For of --------> gives indexies

// var furits =['manago','kiwi','apple', 'grape']

// for ( furit of  furits)
// {
//     console.log(furit);
// }
 

//ForEach loop for Array Travarsal 
//array_name.forEach(elments, index, array)

var furits =['manago','kiwi','apple', 'grape'];

furits.forEach( (furitNmae, furitIndex, full_furit) =>{
    console.log(furitNmae)
    console.log(furitIndex)
    // console.log(full_furit)
});
