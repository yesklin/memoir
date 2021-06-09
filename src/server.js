const express = require('express');
const http = require('http');
const cors = require('cors');
const app = express();
const server = http.Server(app);


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

module.exports = app;