const http = require('http');
const { type } = require('os');

// create server
const server = http. createServer((req, res)=>{
    console.log("this is massage showing server is being trigger");
    // 1. for / and 2. /favicon.ico

    // giving response to web browser. 
// 1. respose end -----------------------------------------------------
    // res.end("from your father");

// 2. respose write -------------------------------------------------------
    // res.write("I am writing response \n");
    // res.write("this is another write");
    // // write alwys need end 
    // res.end();

// 3. sending status code 
    // res.writeHead(404);
    // res.end();

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
// ============================ coverting object to JSON ==============

const json_1 = JSON.stringify(obj_person);


// ----------------------==========request URL ===================--------------
// console.log(req.url)
switch(req.url){
        case '/':
            res.writeHead(200,{"Content-Type":"application/json"})
            res.end(json_1);
            break;
        case '/about':
            res.end();
            break;
        case '/contact':
            res.end("Welcome to our contect page");
             break;
        default:
            res.writeHead(404);
            res.end("page not found");
            break;
    }    

} )

server.listen(5000, ()=>
console.log("Server satarted at 5000")
);


// handling JSON --------------------------------------------------------------------->
// Object 1st;
// const obj_person = {name:'Datenji', 
//                     contect:['93843234234','320742034823'],  // Array within object 
//                     address : 'kapan',
//                     try_it : function(){
//                         return `return form function 1.`
//                     },
//                     greet: function(){
//                         return `hello my name is ${test_obj.name} and form ${this.address} and ${this.try_it()}.`;
//                     }
//                 }
// // ============================ coverting object to JSON ==============

// const json_1 = JSON.stringify(obj_person);
// // ======= getting object =======
// console.log(obj_person);
// console.log(typeof(obj_person))
// // ======= corsponding JSON =====
// console.log(json_1);
// console.log(typeof(json_1))
// // back to JSON; 
// // console.log(JSON.parse(json_1));
// // ----------NEVER SEND METHOD------------------------------->