const express = require('express');
const router = express.Router();
const donutsController = require('../../../controllers/api/v1/donuts');

// get all donuts
router.get('/', donutsController.getAll);

// get donut by id
router.get('/:id', donutsController.getById);

// post/create donut
router.post('/', donutsController.create);

// update donut by id
router.put('/:id', donutsController.update);

// delete donut by id
router.delete('/:id', donutsController.remove);

module.exports = router;