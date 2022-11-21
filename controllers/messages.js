const Message = require('../models/message');

// get all messages
const getAll = (req, res) => {
    if (req.query.user){
        res.json({
            "status": "success",
            "message": "GETTING message for username: " + req.query.user,
        })
    } else {
        res.json({
            "status": "success",
            "message": "GETTING messages",
            "data": {
                "messages": [
                    {
                        "user": "John",
                        "message": "Hello"
                    },
                    {
                        "user": "Jane",
                        "message": "Hi"
                    }
                ]
            }
        })
    }
};

// get message by id
const getById = (req, res) => {
    res.json({
        "status": "success",
        "message": "GETTING message with id: " + req.params.id,
        "data": {
            "message": {
                "user": "Liena",
                "message": "woep woep"
            }
        }
    })
};

// create message
const create = (req, res) => {
    res.json({
        "status": "success",
        "message": "POSTING a new message for user: " + req.body.user,
    })
}

// update message by id
const update = (req, res) => {
    res.json({
        "status": "success",
        "message": "UPDATING a message with id: " + req.params.id,
    })
}

// delete message by id
const remove = (req, res) => {
    res.json({
        "status": "success",
        "message": "DELETING a message with id: " + req.params.id,
    })
}

module.exports.getAll = getAll;
module.exports.create = create;
module.exports.getById = getById;
module.exports.update = update;
module.exports.remove = remove;