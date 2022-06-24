const express = require('express')
const router = express.Router();


router.get('/api',(req,res)=>{
//     const x = Math.floor((Math.random() * 100) + 1);
//     console.log(x);
//     ret_data = object_data.quotes[x];
//     console.log(ret_data);
//    res.json(ret_data)

res.send("we are in quotes page.")
}
); 

module.exports = router;
