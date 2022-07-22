const chalk = require('chalk');
const getFile = require('./index')

const path = process.argv;

async function processText(path){
  const result = await getFile(path[2]);
  console.log(chalk.yellow('list of links'), result);
}

processText(path);