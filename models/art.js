var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var _ = require('lodash')

var artSchema = new Schema({
  title: {type: String, required: true},
  author: String,
  createdAt: {type: Date, default: Date.now},
  votes: {
    president: Number,
    vp: Number,
    treasurer: Number,
    secretary: Number
  }
});

artSchema.methods.accepted = function() {
  var numVotes = _.reduce(this.votes, function(sum, num) { return sum + num });
  if(numVotes > _.size(this.votes)/2) {
    return true;
  } else {
    return false;
  }
}

module.exports = mongoose.model('Art', artSchema);
