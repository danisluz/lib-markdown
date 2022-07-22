const chalk = require('chalk');
const fs = require('fs');

function handleError(error){
  throw new Error(chalk.red(error.code, 'did not find the file'));
}

async function getFile(pathFile){
    const encoding = 'utf-8';
    try {
      const data = await fs.promises.readFile(pathFile, encoding);
      console.log(chalk.green(data));
    } catch(error) {
      handleError(chalk.red(error));
    }
};

// function getFile(pathFile){
//   const encoding = 'utf-8';
//   fs.promises
//     .readFile(pathFile, encoding)
//     .then((data) => console.log(data))
//     .catch((error) => handleError(error));
// }

// function getFile(pathFile){
//   const encoding = 'utf-8';
//   fs.readFile(pathFile, encoding, (error, data) => {
//     if(error){
//       handleError(error);
//     }
//     console.log(chalk.green(data));
//   });
// };

getFile('./files/texto1.md');