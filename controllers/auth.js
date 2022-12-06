const User = require('../models/user');

// const signup = async (req, res) => {
//     let username = req.body.username;
//     let password = req.body.password;

//     const user = new User({username: username});
//     await user.setPassword(password);
//     await user.save().then(result => {
//         res.json({
//             "status": "success",
//             "message": "User created"
//         })
//     }).catch(error => {
//         res.json({
//             "status": "error"
//         })
//     });
// }

const login = async (req, res) => {
    const user = await User.authenticate()(req.body.username, req.body.password).then(result => {
        res.json({
            "status": "success",
            "message": "User logged in"
        })
    }).catch(error => {
        res.json({
            "status": "error",
            "message": "Invalid username or password"
        })
    });
}

// module.exports.signup = signup;
module.exports.login = login;