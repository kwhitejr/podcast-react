var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

//mongodb://127.0.0.1:27017/podcast
mongoose.connect('mongodb://127.0.0.1:27017/podcast');

var episodeSchema = mongoose.Schema({
  episode: String,
  name: String,
  info: String,
  description: String,
  date: String,
  img: String,
  sqimg: String,
  soundcloud: String,
  label: String,
  url: String
});
// collection name will get pluralized by mongoose
var Episode = mongoose.model('Episode', episodeSchema);

var app = express();

// app.use(express.static(path.resolve(__dirname, './src/client')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.header("Access-Control-Allow-Headers", "Content-Type");
        res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
        next();
    });

app.route('/')
  .get(function (req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });

app.route('/episodes')
  .get(function (req, res) {
    Episode.find(function (err, episodes) {
      if (err) {
        console.error(err);
      }
      res.json(episodes);
    });
  })
  .post(function (req, res) {
    var newEpisode = new Episode({
      episode: req.body.episode,
      name: req.body.name,
      info: req.body.info,
      description: req.body.description,
      date: req.body.date,
      img: req.body.img,
      sqimg: req.body.sqimg,
      soundcloud: req.body.soundcloud,
      label: req.body.label,
      url: req.body.url
    });
    newEpisode.save();
    res.send('Episode entered into database.');
  });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  var server = app.listen(3000, function() {
    console.log('Listening to port', 3000);
  });
});