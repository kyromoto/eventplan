const User = require('./User.Model');

exports.listUsers = (req, res) => {
    User.find((err, users) => {
        if(err) {
            console.log(err);
            return res.status(400).json();
        }
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
    let newUser = new User(req.body);

    newUser.save((err, user) => {
        if(err) return res.status(400).json(err);
        return res.json(user);
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