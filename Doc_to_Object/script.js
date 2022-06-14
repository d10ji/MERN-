// const heading = document.createElement('h1');
// heading.innerText = "hello";
// document.body.append(heading);
// console.log(heading);

const heading = document.getElementsByTagName('h1');
const subheading = document.getElementById("subheading");
const description = document.getElementsByClassName("description");
console.log(subheading);
console.log(description);
console.log(heading);

subheading.innerText = "Today is Thursday"

//tag is get as Array so it need index

heading[0].innerText = "We are at 9:11"
