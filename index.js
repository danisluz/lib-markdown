const chalk = require('chalk');

console.log(chalk.blue('Hellow world!'));

const paragrafo = 'Texto retornado dentro de uma função';

function texto(string) {
  return string
};

console.log(chalk.green(texto(paragrafo)));