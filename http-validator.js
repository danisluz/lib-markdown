var featch = require('node-fetch');

function handleError(error){
  throw new Error(error.message);
}

async function checkStatus(arrayURLs){
  try{
    const arrayStatus = await Promise
      .all(arrayURLs
        .map(async url => {
          const res = await featch(url);
          return `${res.status} - ${res.statusText}`;
    }))
    return arrayStatus;
  } catch (error) {
    handleError(error);
  }
}

function generateArrayOfURLs(arrayLinks){
  return arrayLinks
    .map(objLink => Object
      .values(objLink).join())
};

async function validatingUrls(arrayLinks){
  const links = generateArrayOfURLs(arrayLinks);
  const statusLinks = await checkStatus(links);

  const results = arrayLinks.map((obj, i) => ({
    ...obj,
    status: statusLinks[i]
  }))
  return results;
};

module.exports = validatingUrls;