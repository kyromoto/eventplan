const mongoose = require('mongoose');

const DB_URL = process.env.DB_URL || 'mongodb://localhost/eventplan';
const DB_USER = process.env.DB_USER || '';
const DB_PASS = process.env.DB_PASS || '';

let db = mongoose.connection;


/* HOOKS */
//app exit -> shutdown mongoose
process.on('exit', () => mongoose.disconnect());

//mogoose error
db.on('error', console.error.bind(console, 'mongoose-db error:\n'));

//mongoose connected
db.once('open', () => {
    console.log('DB connected');
});

//mongoose disconnected
db.once('close', () => {
    console.log('DB disconnected');
});

exports.initDB = (callback) => {
    if(callback) db.once('open', () => callback());

    console.log('Try to connect to %s as %s ...', DB_URL, DB_USER);
    mongoose.connect(DB_URL, {
        useNewUrlParser: true,
        user : DB_USER,
        pass : DB_PASS
    });
}