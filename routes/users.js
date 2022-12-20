const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');
const passport = require('../passport/passport');

// create user
router.post("/signup", authController.signup);

// log in user
router.post("/login", authController.login);

// change password user
router.post("/changePassword", authController.changePassword);

module.exports = router;