const express = require('express');
const githubAPI = require('../helpers/github.js');
let app = express();

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database

  githubAPI.getReposByUsername(req.body)

});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  res.json()   //send what? where's the repo info in db?  ********* .json or .send

});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

