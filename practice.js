
// defining an object in js

const test_ob = {
    name:"datenji sherpa",
    address :"jiri",
    study : "bachlor",
    gfhffgh : function (times){
        return` ${this.name}, and ${times}`;
    },
};

// constructor. 


function Make_test(name,address,study){
    this.name = name;
    this.address = address;
    this.study = study;

}


Make_test.prototype.gfhffgh = function(){
        return` ${this.name}, and ${times}`;
    };

// passing method form constructor level 


const obj_2 = new Make_test("datenji","jorpati", "DEC"); 
console.log(obj_2);




