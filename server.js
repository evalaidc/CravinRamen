const express = require('express');
const parser = require('body-parser');
const mongoose = require('./db/connection.js');

// pulling schemas from models
const Ramen = require('./db/models.js').Ramen;
const Caption = require('./db/models.js').Caption;

let app = express()
