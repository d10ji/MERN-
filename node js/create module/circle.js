const PI = 3.14;

const calculateArea = (radius) => {
    return PI *radius ** 2;
}

const calculatePerimeter = (radius) => {
    return 2*PI*radius;
}

// before exports
// ---------------------------------------------->
// console.log(global);
// console.log(module);

//-----------------------------------> Exporting  ------------------------------->

module.exports = {calculateArea, calculatePerimeter}; // sending it as object
// it automatically generates its key basis on fuction name. 


// --------------<passing as object propoty -----------------------------------------------
// module.exports.calculateArea = calculateArea;
// module.exports.calculatePerimeter = calculatePerimeter; 
// ---------------------------------------------------------------------------------------


// -------------------------------< after exporting >---------------------------------

// console.log(global);
// console.log(module);