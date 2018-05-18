/**
 * Created by Jordan3D on 5/18/2018.
 */
const express = require('express');
const app = express();
const http = require('http').Server(app);
const path = require('path');
const morgan = require('morgan');
const PORT = 4000;

const bodyParser = require('body-parser');

app.use(morgan('dev'));

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if(req.method === 'OPTIONS'){
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
});

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(req, res){
  res.sendFile('index.html', { root: path.join(__dirname, 'build') });
});

http.listen(PORT, function(){
  console.log(`listening on *:${PORT}`);
});

const EVENTS = [
  {
    id: "Event1",
    name: "Cherepaha",
    text: "Bla-bla-bla",
    color: "rgba(0,2,33,1)",
    intervals:[
      {
        bt: "2018_05_25_60",
        et: "2018_05_25_74"
      },
      {
        bt: "2018_05_25_180",
        et: "2018_05_25_1439"
      }
    ]
  },
  {
    id: "Event2",
    name: "Some event name",
    text: "Some event text",
    color: "rgba(55,1,200,1)",
    intervals:[
      {
        bt: "2018_05_25_75",
        et: "2018_05_25_179"
      },
      {
        bt: "2018_05_26_0",
        et: "2018_05_26_1439"
      }
    ]
  },
  {
    id: "Event3",
    name: "My BirthDay",
    text: "",
    color: "rgba(0,44,100,1)",
    intervals:[
      {
        bt: "2018_06_13_360",
        et: "2018_05_13_1424"
      },
      {
        bt: "2018_05_13_0",
        et: "2018_05_13_359"
      },
      {
        bt: "2018_05_13_1425",
        et: "2018_05_13_1439"
      }
    ]
  },
  {
    id: "Event4",
    name: "Work",
    text: "",
    color: "rgba(33,0,33,0.4)",
    intervals:[
      {
        bt: "2018_06_11_0",
        et: "2018_05_12_1439"
      }
    ]
  }
];

app.get('/events', function (req,res) {
  return res.status(200).json(EVENTS);
});
