// ---- Day 9 -------------Object In js ---------------->
// Accessing object

const array_person = ['Datenji','93843234234','kapan'];
const test_obj  = {name:'form test obj', 
                    contect:'44444', 
                    address : 'kapan'};

const obj_person = {name:'Datenji', 
                    contect:['93843234234','320742034823'],  // Array within object 
                    address : 'kapan',
                    try_it : function(){
                        return `return form function 1.`
                    },
                    greet: function(){
                        return `hello my name is ${test_obj.name} and form ${this.address} and ${this.try_it()}.`;
                    }
                }
// porperties ---> normal variable (name, contect, address)
// method =====> function define in object. (greet)
// ----------------------------------------------------------------------

// Adding new porperty
// obj_person.college ="Deerwalk";
console.log(obj_person.greet());
// ----------------------------------------------------------------------

// Accessing object elemennts
// console.log(obj_person.greet());

// function accessObjectProperty(){
//     console.log(obj_person.name);
// }
// accessObjectProperty();

// -----------------Dynamic Acess in only available with [""] / bracket notation ====

function accessObjectProperty(perpertyToAccess){
    console.log(obj_person[perpertyToAccess]);
}
accessObjectProperty("contect");

// --------------------------------------------------------------------


// constructor ======================>

// function const_person(const_name, const_contact,const_address){
//     let obj={};
//     obj.const_name = const_name;
//     obj.const_address= const_address;
//     obj.const_contact=const_contact;
//     return obj;
// }

// const obj_person1 = new const_person('dddd','213123','jiri');
// console.log(obj_person);

// ===================== Using new keyword =================
// added responsibilites
// no empty object no retrun  and no name ---> use this too 


// function Const_person(const_name, const_contact,const_address){
//                         this.const_name = const_name;
//                         this.const_address= const_address;
//                         this.const_contact=const_contact;
// }
// const obj_person1 = new Const_person('dddd','213123','jiri');
// console.log(obj_person1);

// const obj_person2 = const_person('dddd','213123','jiri');


//Object Prototype
// ------------------------------------------------------------------------------

// array has prototype as array ---> object ----> array ---> object ----> null 

//Function is object 
// function prototype function ---> object ----

// method in object can be define in prototype


function Const_person(const_name, const_contact,const_address){
                        this.const_name = const_name;
                        this.const_address= const_address;
                        this.const_contact=const_contact;
                                                }

Const_person.prototype.greet = function() {
    return `hello, my name is ${this.const_name}. i live in ${this.address}`
};
                                           
const obj_person1 = new Const_person('dddd','213123','jiri');  // now greet method is in level of constructor 
// so when Const_person constructor in used greet function is also made for each object of constructor. 

console.log(obj_person1);
