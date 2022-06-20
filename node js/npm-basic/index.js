// publishing NPM 

//  npm init -y 


// --------------------------------------------------
//  const chalk = require('chalk');  // after ES6

 import chalk from 'chalk';
 import validator from 'validator';

 console.log(chalk.blue("hello world"));
 console.log(chalk.red.bgGreen.bold("this is latter is "));

console.log(validator.isEmail("sherpa.datenji@gmail.com"));

console.log(chalk.green(
	'I am a green line ' +
	chalk.blue.underline.bold('with a blue substring') +
	' that becomes green again!'
));


// ES2015 template literal
console.log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);

