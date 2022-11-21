const express = require('express');
const router = express.Router();
const messagesController = require('../controllers/messages');

// get all messages
router.get('/', messagesController.getAll);

// get message by id
router.get('/:id', messagesController.getById);

// post/create message
router.post('/', messagesController.create);

// update message by id
router.put('/:id', messagesController.update);

// delete message by id
router.delete('/:id', messagesController.remove);

module.exports = router;