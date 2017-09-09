const express    = require('express'),
      cors       = require('cors'),
      morgan     = require('morgan'),
      bodyParser = require('body-parser');

//Middleawre
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cors());