const jwt = require('jsonwebtoken');
const config = require('config');
const User = require('../models/user');

// user sign up (in comments because we only want Donuttello as admin)
const signup = async (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    const user = new User({username: username});
    await user.setPassword(password);
    await user.save().then(result => {
        let token = jwt.sign({
            uid: result._id,
        }, config.get("jwt.secret"));

        res.json({
            "status": "success",
            "message": "User created",
            "data": {
                "token": token
            }
        })
    }).catch(error => {
        res.json({
            "status": "error"
        })
    });
}

// user login
const login = async (req, res) => {
    const user = await User.authenticate()(req.body.username, req.body.password).then(result => {
        // no user found
        if (!result.user) {
            return res.json({
                "status": "error",
                "message": "Invalid username or password"
            })
        }

        // user found
        let token = jwt.sign({
            uid: result.user._id,
        }, config.get("jwt.secret"), {expiresIn: '1h'});

        res.json({
            "status": "success",
            "message": "User logged in",
            "data": {
                "token": token
            }
        })
    }).catch(error => {
        res.json({
            "status": "error",
            "message": "Invalid username or password"
        })
    });
}

// changePassword
const changePassword = async (req, res) => {
    const user = await User.authenticate()(req.body.username, req.body.oldPassword).then(result => {
        // no user found
        if (!result.user) {
            return res.json({
                "status": "error",
                "message": "User not found"
            })
        }
        
        // user found
        result.user.setPassword(req.body.newPassword, async (err, user) => {
            if (err) {
                return res.json({
                    "status": "error",
                    "message": "Error changing password"
                })
            }
            await user.save().then(result => {
                res.json({
                    "status": "success",
                    "message": "Password changed"
                })
            }).catch(error => {
                res.json({
                    "status": "error",
                    "message": "Error changing password"
                })
            });
        });
    }).catch(error => {
        res.json({
            "status": "error",
            "message": "Invalid username or password"
        })
    });
}

module.exports.signup = signup;
module.exports.login = login;
module.exports.changePassword = changePassword;