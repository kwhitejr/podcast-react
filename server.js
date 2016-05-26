var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

var episodeSchema = mongoose.Schema({
  name: String,
  author: String
});
// collection name will get pluralized by mongoose
var Episode = mongoose.model('Episode', episodeSchema);

var app = express();

app.use(express.static(path.resolve(__dirname, './src/client')));
app.use(bodyParser.urlencoded({extended: false}));

app.route('/')
  .get(function (req, res) {
    res.send('index');
  });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  var server = app.listen(3000, function() {
    console.log('Listening to port', 3000);
  });
});