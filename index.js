const chalk = require('chalk');
const fs = require('fs');

function extractLinks(text){
  const regex = /\[([^\]]*)\]\((https?:\/\/[^\$#\s].[^\s]*)\)/gm;
  const arrayResults = [];
  let temp;
  while((temp = regex.exec(text)) !== null){
    arrayResults.push({ [temp[1]]: temp[2] });
  }
  return arrayResults.length === 0 ? 'there are no links' : arrayResults;
}

function handleError(error){
  throw new Error(chalk.red(error.code, 'did not find the file'));
}

async function getFile(pathFile){
    const encoding = 'utf-8';
    try {
      const data = await fs.promises.readFile(pathFile, encoding);
      return extractLinks(data);
    } catch(error) {
      handleError(chalk.red(error));
    }
};

module.exports = getFile;