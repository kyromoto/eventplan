const Router = require('express').Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const User = require('./User.Model');

const JWT_TOKEN_SECRET = process.env.TOKEN_SECRET || 'secret';
const JWT_TOKEN_EXPIRE = process.env.TOKEN_EXPIRE || '2h';

Router.put('/login', (req, res) => {
    User.findOne({ username : req.body.username })
        .exec()
        .then((user) => {
            bcrypt.compare(req.body.password, user.password, (err, result) => {
                if(err) {
                    console.error(err);
                    return res.status(500).json({
                        success : false,
                        error : err
                    });
                }

                if(result) {
                    jwt.sign(
                        {
                            username : user.username,
                            _id : user._id
                        },
                        JWT_TOKEN_SECRET,
                        {
                            expiresIn: JWT_TOKEN_EXPIRE
                        },
                        (err, jwtToken) => {
                            if(err) return res.status(500).json({
                                success : false,
                                error : err
                            });
                            return res.json({
                                success : true,
                                token : jwtToken
                            });
                        }
                    );
                }
            });
        })
        .catch(err => {
            console.error(err);
            return res.status(500).json({
                error : err
            });
        });
});

exports.login = Router;

exports.checkAuth = (req, res, next) => {
    let token = req.headers['x-access-token']; 
    let msg = -1;

    if(!token) {
        msg = 'No token provided.';
        console.error(msg);
        return res
            .set('auth', false)
            .status(401)
            .json({
                auth : false,
                message : msg
            });
    }

    jwt.verify(token, JWT_TOKEN_SECRET, (err, decoded) => {
        if(err) {
            console.error(err);
            return res
            .set('auth', false)
            .status(500)
            .json({
                auth : false,
                message : 'Failed to authenticate token.'
            });
        }

        res.set('auth', true);
        return next();
    });
}