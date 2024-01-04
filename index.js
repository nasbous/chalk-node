const chalk = require('chalk');
const wilderArray = require('./wilders.js')

console.log(chalk.blue('Hello world!'));

wilderArray.forEach(wilder => {
    switch (wilder.name) {
      case 'Samuel':
        console.log(chalk.blue(wilder.name));
        break;
      case 'Flavien':
        console.log(chalk.red(wilder.name));
        break;
      case 'Kanna':
        console.log(chalk.white(wilder.name));
        break;
      case 'Sergei':
        console.log(chalk.green(wilder.name));
        break;
      default:
        console.log(wilder.name);
    }
  });
