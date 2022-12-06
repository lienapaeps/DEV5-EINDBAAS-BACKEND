const Donut = require('../../../models/Donut');

// get all donuts
const getAll = (req, res) => {
    Donut.find({}, (err, docs) => {
        if (err) {
            res.json({
                "status": "error",
                "message": "Error getting donuts"
            })
        }
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
        if (err) {
            res.json({
                "status": "error",
                "message": "Error getting donut"
            })
        }
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
    donut.naamDonut = req.body.naamDonut;
    donut.glazuur = req.body.glazuur;
    donut.topping = req.body.topping;
    donut.logo = req.body.logo;
    donut.logoVorm = req.body.logoVorm;
    donut.status = "opgeslagen";
    donut.email = req.body.email;
    donut.naamBedrijf = req.body.naamBedrijf;
    // donut.user = req.user._id;

    donut.save((err, doc) => {
        if (err) {
            res.json({
                "status": "error",
                "message": "Could not create donut"
            })
        }
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