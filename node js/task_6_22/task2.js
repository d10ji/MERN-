const http = require('http');
const fs = require('fs');
const { json } = require('stream/consumers');
const { randomBytes } = require('crypto');

const data = fs.readFileSync("quotes.json", "utf-8", (err)=> {
    if (err){
        console.log("sorry error occured");
        console.log(err);
    }
});
const object_data = JSON.parse(data);


// create server
const server = http. createServer((req, res)=>{
    console.log("this is massage showing server is being trigger");


if (req.url == '/api'){
    
    res.writeHead(200,{
    "Content-Type" : "application/json",
    "Access-Control-Allow-origin":"*"
});
    const x = Math.floor((Math.random() * 100) + 1);
    console.log(x);
    // console.log(object_data.quotes[x]);
    const returning = JSON.stringify(object_data.quotes[x])
    res.end(returning); //returning whole oject

}

});

server.listen(8000, ()=>
console.log("Server satarted at 8000")
);

