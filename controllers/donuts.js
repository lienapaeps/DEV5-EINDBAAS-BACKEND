const Donut = require('../models/donut');

// get all donuts
const getAll = (req, res) => {
    Donut.find({}, (err, docs) => {
        // something went wrong
        if (err) {
            res.json({
                "status": "error",
                "message": "Error getting donuts"
            })
        }
        // found donuts
        if (!err) {
            res.json({
                "status": "success",
                "data": {
                    "donuts": docs
                }
            })
        }
    })
};

// get donut by id
const getById = (req, res) => {
    Donut.find({"_id": req.params.id}, (err, doc) => {
        // something went wrong
        if (err) {
            res.json({
                "status": "error",
                "message": "Error getting donut"
            })
        }
        // found donut by id 
        if (!err) {
            res.json({
                "status": "success",
                "data": {
                    "donut": doc
                }
            })
        }
    })
};

// create donut
const create = (req, res) => {
    let donut = new Donut();

    // grab data from the request body
    donut.email = req.body.email;
    donut.nameCompany = req.body.nameCompany;
    donut.nameDonut = req.body.nameDonut;
    donut.icing = req.body.icing;
    donut.topping = req.body.topping;
    donut.logo = req.body.logo;
    donut.logoVorm = req.body.logoVorm;
    donut.status = "opgeslagen";
    donut.imageUrl = req.body.imageUrl;
    // donut.user = req.user._id;

    // save donut to database
    donut.save((err, doc) => {
        // something went wrong
        if (err) {
            res.json({
                "status": "error",
                "message": "Could not create donut",
                "error": err
            })
        }
        // saving donut to database
        if (!err) {
            res.json({
                "status": "success",
                "data": {
                    "donut": doc
                }
            })
        }
    })
}

// update donut by id
const update = (req, res) => {
    // let user = req.user._id;
    let donutId = req.params.id;
    // console.log(donutId);
    Donut.findOneAndUpdate({
        // user: user,
        _id: donutId
    }, {
        status: req.body.status
        
    }, {
        new: true
    }).then(doc => {
        res.json({
            "status": "success",
            "data": {
                donut: doc
            }
        })
    }).catch(err => {
        res.json({
            "status": "error",
            "message": "Could not update donut"
        })
    })
}

// delete donut by id
const remove = (req, res) => {
    // let user = req.user._id;
    let donutId = req.params.id;

    Donut.findOneAndDelete({
        // user: user,
        _id: donutId
    }).then(doc => {
        res.json({
            "status": "success",
            "data": {
                donut: doc
            }
        })
    }).catch(err => {
        res.json({
            "status": "error",
            "message": "Could not delete donut"
        })
    })
}

module.exports.getAll = getAll;
module.exports.create = create;
module.exports.getById = getById;
module.exports.update = update;
module.exports.remove = remove;