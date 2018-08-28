//const mongoose = require('./../../db');
const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    name : { type : String, required : true, unique : true },
    start_date : { type : Date, required : true },
    end_date : { type : Date, required : true },
    info : { type : String }
});

eventSchema.virtual('type').get(() => {
    return 'events';
});

eventSchema.set('toJSON', {
   virtuals : false
});

const Event = mongoose.model('event', eventSchema);

module.exports = Event;