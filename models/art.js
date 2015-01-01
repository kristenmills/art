var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var _ = require('lodash')

var artSchema = new Schema({
  title: {type: String, required: true},
  author: String,
  fileName: String,
  createdAt: {type: Date, default: Date.now},
  votes: {
    president: {type: Number, default: 0},
    vp: {type: Number, default: 0},
    treasurer: {type: Number, default: 0},
    secretary: {type: Number, default: 0}
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
