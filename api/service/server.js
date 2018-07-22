/* eslint-disable import/no-extraneous-dependencies */
import 'colors';
import http from 'http';
import express from 'express';
import app from './app';

const port = 1234;
app.set('port', port);
app.use(express.static('public'));


const server = http.createServer(app);
server.listen(port);
console.log(`Start WEB APP at server ${port}`.yellow);

