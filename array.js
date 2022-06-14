// fining largest number in array using for in/ for of / for each. 

// var array = [100,200,400,500,700, 450, 230, 30];
// let max = array[0]; //initilizing max
// for(let i = 0; i<array.length ; i++){
//     max = (array[i]>max)? array[i]: max;
// };
// console.log("given arry :"+ array);
// console.log(`the largest elements: ${max}`);

//  =============using for of ====================

// for( element of array){
// if(element>max){
//     max=element
// }
// };
// console.log(`the largest elements: ${max}`);
// largest_index = 0;
// array.forEach((arrvalue,arryidex,arrayyfull)=>{
//     max = arrvalue > max ? arrvalue : max;
//     });
// console.log(`${array}`);
// console.log(`the largest elements: ${max}`);
// console.log(`index of lagrgest: ${largest_index}`);
// // above line uses tarnary operator. 



// -------------Searching of an array. ------------------>
// indesOf.-----------> method.
// lastIndesOf() --------> strating from last. 
//Find --->  return only one elements (if not passed cond)
// findIndex ---> 

// let results = [2,4,3,2,4,3,58,3,124]
// let find = results.find(value => value>5)
// console.log(find)


// ====================== filtering =====================>
// returns array
// filter creates empty array by defaults. 

//  const results = [2,4,3,2,4,3,58,3,124];
// let find = results.filter(value => value>5)
// console.log(find)

//===============big example =====>
// let tttt = results.filter((value,index,arrayd)=>{
//     return value > 7 || index>2;
// });
// console.log(tttt);
// results.push(30,320,40);
// console.log(results);

// const month = ['jan','march','April','June','July'];

// console.log(month.push("Dec"));

// month.splice( month.indexOf('march'),1,'March');
// console.log(month)


// month.splice(month.indexOf('June');,1)
// console.log(month);


// let furits = ['apple','mango','watermelon'];
// console.log(furits);
// let input = 'tt';
//  function adding_new(input){
//     if (  furits.indexOf(input) != -1) {  
//          console.log("this furits already exits.");
//         console.log(furits);
        
//         }
//     else
//     {
//         furits.push(input);
//         console.log("sucessfully added.");
//         console.log(furits);

//     }
//  };
//  adding_new(input);



// // ================ example of more generic function . ================>

// const shoppingList = ['mango','soap', ' Noodeles'];
// const hobbylist = ['coding','playing'];

// const checkList = (ListToSearch, itemToSearch) => {
//     if (ListToSearch.indexOf(itemToSearch)== -1){
//         ListToSearch.push(itemToSearch);
//     }
//     else{
//         console.log(`${itemToSearch} is already in the list`);
//     }
// }
// checkList(shoppingList,'mnago');



// ======================== DAY 9 ======================================>
// // MAP(), REDUCE() ----------->
// const numbers = [2,3,4,6,8];

// // solution 1 ==============================>
// const squrot = numbers.map( (ele) => {
//     return Math.sqrt(ele);
// } );
// console.log(numbers);
// console.log(squrot);

// // forEach is never able to return
// // map alwys have return

// //Map supports Chaining 

// const new_numbers2 = numbers.map( (ele) => {
//     return ele*2;
// }).filter((ele)=>{ 
//     return ele > 10;
// });

// console.log(new_numbers2);

// ======     TIPS           == In arrow function => 
// when you use {}  -----> use return keyword 

// ================= reduce -----------------------------
// reduce uses reducer function rather than callbackfn 
// Namly different (takes 4 arguments. )
// flaten

const numbers = [2,4,6,8,10];

let sum = numbers.reduce((prevVlaue,element)=>{
    return prevVlaue += element;
},1);

console.log(sum)







