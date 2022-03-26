const express = require('express');
const githubAPI = require('../helpers/github.js');
let app = express();
const db = require('../database/index.js');

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json()) //express json method

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  console.log(req.body) // -> {username: 'hackreactor'}
  // console.log(res.data) //undefined?
  githubAPI.getReposByUsername(req.body.username) //what's the param? body or data?
  .then(
    // callback function inside then. why?
    //also saying mangoDb doesn't like promise. so we want to use callback again? and how?
    // userRepo => console.log(userRepo)
    userRepos => db.save(userRepos.data, function(err, sucessData) {
      //what next?
      // console.log(userRepos);
      if (err) {
        res.sendStatus(501);
      } else {
        console.log(sucessData);
        res.send(sucessData);
      }
    }
    )
  )
  .catch(err => console.log('Error: ' + err.message))

});



app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  db.getTop25()
  .then(result => res.send(result))
  .catch(err => res.send('Error getting top 25' + err))
});



let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

