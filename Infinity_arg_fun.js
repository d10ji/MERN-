// definition ---> paramenters
function ToPrintInifinity(...infy_var){
    // let sum = infy_var.reduce((accumulator,element)=>{
    // accumulator += element;
    // });
    // return console.log(`sum  = ${sum}`);
    // return accumulator;
    return infy_var.reduce((accumulator,element)=>accumulator + element);
}
// calling 
// No limit on arguments
console.log(ToPrintInifinity(78,90,54,4,3,3));

//typeScript .  ----------------> define the type early and prevent missmatch




