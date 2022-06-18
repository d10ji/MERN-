// Core module. 
// predefine module. 
// File (fs).  ---->

const fs = require('fs'); // import module file.


fs.writeFile("text.txt","hello form NERM class", (err) => {
    if (err){
        console.log("sorry error occured");
        console.log(err)
        return;
    }
    console.log("data write in file completed.");
fs.readFile("text.txt", "utf-8", (err,data)=> {
        if (err){
            console.log("sorry error occured");
            console.log(err);
            return;
        }
        console.log("read sucessfully");
    console.log(data);
    });

    // Rename after write.
fs.rename("text.txt","info.txt",(err) => {
    if (err){
        console.log("sorry error occured");
        console.log(err)
        return;
    };
    return console.log("sucessfully rename");
});
    
});

// make  one after another  ---> litter predictable 

// fs.appendFile("text.txt","Today is Thursday",()=>{
//     return console.log("sucessfully append");
// });


// asynchorous ---> not specified setTime() ---> random calling of function
// make it asynchorous some how to prevent error.. 
// onlyl read after write.
// only rename after write. 
// only append after write 

