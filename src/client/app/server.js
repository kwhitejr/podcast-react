var express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

var episodeSchema = mongoose.Schema({
  name: String,
  author: String
});
// collection name will get pluralized by mongoose
var Episode = mongoose.model('Episode', episodeSchema);

var app = express();

app.use(bodyParser.urlencoded({extended: false}));

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  var server = app.listen(3000, function() {
    console.log('Listening to port', 3000);
  });
});