const chalk = require('chalk');
const getFile = require('./index');
const validatingUrls = require('./http-validator');

const path = process.argv;

async function processText(path){
  const result = await getFile(path[2]);
  if(path[3] === 'validate'){
    console.log(chalk.yellow('validated links'), await validatingUrls(result));
  } else {
    console.log(chalk.yellow('list of links'), result);
  }
}

processText(path);