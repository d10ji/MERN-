const fs = require('fs')

 const sample_object = {
    movie_name : "Avtar",
    year : 2009,
    dirctor : "Borish jonson",
    collection : "over 1 T"    
 };

const sample_json =JSON.stringify(sample_object);
console.log(sample_json);

fs.writeFileSync("task.JSON",sample_json, (err) => {
    if (err){
        console.log("sorry error occured");
        console.log(err)
    }
});

const data = fs.readFileSync("task.JSON", "utf-8", (err)=> {
    if (err){
        console.log("sorry error occured");
        console.log(err);
    }
});
console.log(typeof(data));

const back_to_obj = JSON.parse(data);
console.log(back_to_obj);
console.log(`type =  ${typeof(back_to_obj)}`);



