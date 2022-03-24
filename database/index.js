const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher', { useUnifiedTopology: true, useNewUrlParser: true });  //fetcher?

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  id: Number,
  repoName: String,
  ownerName: String,
  repoLink: String,
  forks: Number
});

//compiling schema into a Model:
let Repo = mongoose.model('Repo', repoSchema);


let save = (/* TODO */ data, callback/* somedata? */) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  for (var i=0; i<data.length; i++) {
    //create a new instance for every repo obj
    var newRepo = new Repo({
      id: data[i].id,
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

  // Repo.create(data, function(err, sucess) {

  //   if (err) {
  //     callback(err, null); //
  //   } else {
  //     callback(null, sucess)
  //   }
  // })

}

module.exports.save = save;