#!/usr/bin/env node
const express = require('express');
const bodyParser = require('body-parser');

let http_port = process.env.HTTP_PORT || 8080;

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.post('/transcription', (req, res) => {
  console.log(`TRANSCRIPTION FOR BOB:`, req.body);
  res.status(201).end();
});

app.listen(http_port)
console.log(`Listening on ${http_port}`);
