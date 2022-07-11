const { query } = require('express');
const cors = require('cors');
const express = require('express');
const books_data = require('./book.json')
const hbs = require('hbs');

const app = express();

app.use("/static",express.static(__dirname+'/public'));

hbs.registerPartials(__dirname +'/views/partials');

app.use(cors());




app.set('view engine','hbs');


app.get('/',(req,res)=>{
    // res.send("Kam hundai xa");
    res.end("Use /books")
});


app.get('/books',(req,res)=>{
    // res.send("Kam hundai xa");
    res.render('index',{books_data})
});


app.get('/books/:bookID',(req,res)=>{
    console.log(req.params) // for flexibility use quary method later
    const {bookID} = req.params  //destructing the req.params into bookID
    
    // const singlebook = books_data.filter((book)=>{
    //     return book.id == bookID; // typecast since bookId is string (only string can request)
    // });



    const singlebook = books_data[bookID-1 ];

     console.log(typeof(singlebook));
    //  res.send(singlebook);


    res.render('book-details', {singlebook});
})

app.post("/books/addnew",(req,res)=>{
    console.log(req.body);
    // fs.appendFile('./data.json',JSON.stringify(req.body), (err)=>{
    //     if (err){
    //         console.log("error occured");
    //         console.log(err);
    //     }
    // })
    res.send("Data ayo hai"); 
 });
 


app.listen(3333,()=>{
    console.log("server started at 3333 for book project")
});


