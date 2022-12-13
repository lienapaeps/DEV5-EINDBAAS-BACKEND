const express = require('express');
const router = express.Router();
const donutsController = require('../../../controllers/api/v1/donuts');
const passport = require('../../../passport/passport');

// get all donuts
router.get('/', passport.authenticate('jwt', {session: false}) , donutsController.getAll);

// get donut by id
router.get('/:id', donutsController.getById);

// post/create donut
router.post('/', donutsController.create);

// update donut by id
router.put('/:id', passport.authenticate('jwt', {session: false}) , donutsController.update);

// delete donut by id
router.delete('/:id', passport.authenticate('jwt', {session: false}),  donutsController.remove);

module.exports = router;