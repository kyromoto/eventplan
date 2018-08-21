const mongoose = require('./../../db');

const userSchema = new mongoose.Schema({
    username : { type : String, required : true, unique : true },
    password : { type : String, required : true},
    name : { type : String, required : true}
});

/*userSchema.pre('save', (next) => {
    var self = this;
    User.find({ username : self.username }, (err, users) => {
        if(!users.length) next();
        else next(new Error('username already exists'));
    });
});*/

const User = mongoose.model('user', userSchema);

module.exports = User;