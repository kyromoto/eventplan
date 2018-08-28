const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('./User.Model');

exports.listUsers = (req, res) => {
    User.find((err, users) => {
        if(err) {
            console.log(err);
            return res.status(400).json();
        }

        //if list has no entrys => set status to NoContent(204)
        if(users.length == 0) return res.status(204).json(users);

        return res.json(users);
    });
}

exports.getUser = (req, res) => {
    User.findById(req.params.id, (err, user) => {
        if(err) {
            console.error(err);
            return res.status(400).json(err);
        }

        return res.json(user);
    });
}

exports.postUser = (req, res) => {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if(err) {
            return res.status(500).json({
                error : err
            });
        } else {
            let newUser = new User({
                username : req.body.username,
                password : hash,
                name : req.body.name
            });

            newUser.save((err, user) => {
                if(err) return res.status(400).json(err);
                return res.json({
                    _id : user._id,
                    username : user.username,
                    name : user.name
                });
            });
        }
    });   
}

exports.updateUser = (req, res) => {
    User.findOneAndUpdate(req.params.id, req.body, (err, user) => {
        if(err) return res.status(400).json(err);
        return res.json(user);
    });
}

exports.deleteUser = (req, res) => {
    User.findByIdAndRemove(req.params.id, (err, user) => {
        if(err) return res.status(400).json(err);
        return res.json(user);
    });
}

exports.notImplemented = (req, res) => res.status(501).json();