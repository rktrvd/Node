const chalk = require("chalk");
const validator = require("validator");

// console.log(chalk.blue('Hello World'));
// console.log(chalk.blue('Hello') + ' World' + chalk.red('!'));
// console.log(chalk.blue.bgRed.bold('Hello world!'));
// console.log(chalk.underline.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));
// console.log(chalk.red('Hello', chalk.bgWhite('world') + '!'));

// console.log(chalk.green(
// 	'I am a green line ' +
// 	chalk.blue.underline.bold('with a blue substring') +
// 	' that becomes green again!'
// ));

// console.log(`
// CPU: ${chalk.red('90%')}
// RAM: ${chalk.green('40%')}
// DISK: ${chalk.yellow('70%')}
// `);

const res = validator.isEmail("ravi@ravi.com");
console.log(res ? chalk.green.inverse(res):chalk.red.inverse(res));

const date = validator.isDate("2002-10-15","YYYY-MM-DD");
console.log(date ? chalk.green.inverse(date):chalk.red.inverse(date));