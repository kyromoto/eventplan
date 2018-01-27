const path      = require('path');

const lowdb     = require('lowdb'),
      FileSync  = require('lowdb/adapters/FileSync'),
      lodashId  = require('lodash-id');

const dbFile     = path.join(__dirname, 'db.json');

console.log(dbFile);

const adapter   = new FileSync(dbFile),
      db = lowdb(adapter);

db._.mixin(lodashId);

module.exports = db;
