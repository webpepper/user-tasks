// import { readFileSync } from 'fs';

let configSrc;

const isHeroku = process.env.NODE && ~process.env.NODE.indexOf('heroku') ? true : false;

if (isHeroku) {
  configSrc = require('../appConfig.prod.json');
} else {
  configSrc = require('../appConfig.dev.json');
}

export const config = configSrc;
