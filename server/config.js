'use strict';
const pgp = require('pg-promise')();
const makeSchema = require('./schema.js');

// pgp.pg.defaults.ssl = process.env.DB_PROD || false;

let db = pgp(`postgres://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}`);

makeSchema(db);

module.exports = db;
