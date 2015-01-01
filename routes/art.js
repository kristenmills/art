var express = require('express');
var router = express.Router();

var Art = require('../models/art');

var fs = require('fs')
var mkdirp = require('mkdirp');
var moment = require('moment');
var uuid = require('uuid');

router.post('/', function(req, res) {
  var fstream;
  var params = {};

  req.busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
    console.log("Uploading:", filename);
    mkdirp.sync(__dirname + '/../uploads/' + moment().day(5).format('YYYYMMDD'));
    params.fileName = uuid.v4() + '.' + filename.split('.').pop();
    fstream = fs.createWriteStream(__dirname + '/../uploads/' + moment().day(5).format('YYYYMMDD') + '/' + params.fileName);
    file.pipe(fstream);
  });

  req.busboy.on('field', function(key, value, keyTruncated, valueTruncated) {
    params[key] = value;
  });

  req.busboy.on('finish', function() {
    Art.create(params, function(err, art){
      if(!err) {
        res.json({ notice: 'Successfully uploaded file'});
      }
    });
  });
  req.pipe(req.busboy);
});

module.exports = router;
