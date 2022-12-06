const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');

router.get('/', (req, res) => {
    res.send('Hello World!');
});

// router.post("/signup", authController.signup);
router.post("/login", authController.login);

module.exports = router;