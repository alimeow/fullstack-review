const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher', { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true} );

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  repoName: String,
  ownerName: String,
  repoLink: String,
  forks: Number
});

//compiling schema into a Model:
let Repo = mongoose.model('Repo', repoSchema);


let save = (/* TODO */ data, callback/* somedata? */) => {
  // TODO: Your code here
  // This function should save a repo or repos to the MongoDB

  console.log(data)
  for (var i=0; i<data.length; i++) {
    //create a new instance for every repo obj
    var newRepo = new Repo({
      repoName: data[i].name,
      ownerName: data[i].owner.login,
      repoLink: data[i].html_url,
      forks: data[i].forks
    });
    //save it
    // Repo.create(newRepo, function(err, sucess) {
    newRepo.save(function(err, sucess) {

      if (err) {
        callback(err, null);
      }
      // else {
        // callback(null, sucess); //don't need to send back success every time
      // }

    })
  }
  callback(null, 'Repos saved');
}

let getTop25 = () => {
  return Repo.find().sort({forks: -1}).limit(25);
}

module.exports.save = save;
module.exports.getTop25 = getTop25;
