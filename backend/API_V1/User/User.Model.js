//const mongoose = require('./../../db');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username : { type : String, required : true, unique : true },
    password : { type : String, required : true},
    name : { type : String, required : true}
});

userSchema.virtual('type').get(() => {
    return 'users';
});

userSchema.set('toJSON', {
   virtuals : false
});


const User = mongoose.model('user', userSchema);

module.exports = User;