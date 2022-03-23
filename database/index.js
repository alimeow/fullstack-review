const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

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

let save = (/* TODO */) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  await Repo.save(); //?
}

module.exports.save = save;