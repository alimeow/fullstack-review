const axios = require('axios');
const config = require('../config.js');

let getReposByUsername = (/* TODO */username) => {   //who's using getReposByUsername function?
  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    url: `https://api.github.users/${username}/repos`, //what url? who's gonna use the options method? database? server? maybe server.
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
    // TODO - Use the axios module to request repos for a specific
  // user from the github API
  axios.get(options.url, options)
  .then()
  .catch()

}

module.exports.getReposByUsername = getReposByUsername;