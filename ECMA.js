// ECMA
// ---1. LET and CONST ----2. tempelate literals ----  3. default arguments --- 4. Arrow function --->

// Remaining ---> >>>>>. .>>
//5. Destrcturing 



// let furits = ['apple','mango','kiwi','banana'];

// let var1 = furits[0];
// let var2 = furits[1];
// let var3 = furits[2];



 // USING ES6:


// let [var1, var2,var3] = furits;
// console.log(var1,var2,var3);


// rest oprator 
// rest oprator alwys in the end . 

// let [var1, var2, ...remaingMovies] = furits;
// console.log(var1,var2,remaingMovies);


// --------------------- for object 

// const person  = {name:'Datenji', 
//                     contect:'44444', 
//                     address : 'kapan'};

// ====== not having same as key =======
// const {fistNmae, contect, address } = person;
// console.log(fistNmae,contect,address);


// ==========================can have differnt key ---to-- > variable

// const {name:fistNmae, contect, address } = person;
// console.log(fistNmae,contect,address);

// Rest operator returns value in object form 

// const {fistNmae, contect, ...vaki } = person;
// console.log(contect,vaki);





// ---------------------< spreading >-----------------------


let furits = ['apple','mango','kiwi','banana'];
let music = [ 'linkin park','selo','flok']
// let newfurits = furits// 

// newfurits.pop();
// console.log(furits);

/// its copy by referecne concept so the might be problems 
// ex. \
// i made change in newfurits but got change in original one. 
// they are pointing in same refrencee 

// ==----------------------- so use spread ----------------------------===

let newfurits = [...furits]
newfurits.pop();
console.log(furits);
// no effect in original one. 

let newfurits1 = [...furits, ...music, 'hello moh ta naya ho'];
console.log(newfurits1)




