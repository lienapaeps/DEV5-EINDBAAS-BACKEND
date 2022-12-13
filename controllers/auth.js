const User = require('../models/User');
const jwt = require('jsonwebtoken');
const config = require('config');

// const signup = async (req, res) => {
//     let username = req.body.username;
//     let password = req.body.password;

//     const user = new User({username: username});
//     await user.setPassword(password);
//     await user.save().then(result => {
//         let token = jwt.sign({
//             uid: result._id,
//         }, config.get("jwt.secret"));

//         res.json({
//             "status": "success",
//             "message": "User created",
//             "data": {
//                 "token": token
//             }
//         })
//     }).catch(error => {
//         res.json({
//             "status": "error"
//         })
//     });
// }

const login = async (req, res) => {
    const user = await User.authenticate()(req.body.username, req.body.password).then(result => {
        // als er geen user gevonden is
        if (!result.user) {
            return res.json({
                "status": "error",
                "message": "Invalid username or password"
            })
        }

        let token = jwt.sign({
            uid: result.user._id,
        }, config.get("jwt.secret"));

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

// changePassword with passport-local-mongoose
// const changePassword = async (req, res) => {

//     // get the user from the database
//     const user = await User.findOne({_id: req.user._id});

//     // check if the old password is correct
//     const result = await user.authenticate()(req.body.oldPassword);

//     // if the old password is correct, change the password
//     if (result) {
//         user.setPassword(req.body.newPassword, async (err, user) => {
//             await user.save().then(result => {
//                 res.json({
//                     "status": "success",
//                     "message": "Password changed"
//                 })
//             }).catch(error => {
//                 res.json({
//                     "status": "error",
//                     "message": "Something went wrong"
//                 })
//             });
//         });
//     } else {
//         res.json({
//             "status": "error",
//             "message": "Old password is incorrect"
//         })
//     }
// }

// module.exports.signup = signup;
module.exports.login = login;
// module.exports.changePassword = changePassword;