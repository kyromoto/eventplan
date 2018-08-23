//const mongoose = require('./../../db');
const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    name : { type : String, required : true, unique : true },
    start_date : { type : Date, required : true },
    stop_date : { type : Date, required : true },
    info : { type : String }
});

const Event = mongoose.model('event', eventSchema);

module.exports = Event;