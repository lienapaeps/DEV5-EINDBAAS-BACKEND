const Donut = require('../../../models/donut');

// get all donuts
const getAll = (req, res) => {
    res.send('GETTING all donuts');
};

// get donut by id
const getById = (req, res) => {
    res.send('GETTING a donut with id: ' + req.params.id);
};

// create donut
const create = (req, res) => {
    res.send('CREATING a donut');
}

// update donut by id
const update = (req, res) => {
    res.send('UPDATING a donut with id: ' + req.params.id);
}

// delete donut by id
const remove = (req, res) => {
    res.send('DELETING a donut with id: ' + req.params.id);
}

module.exports.getAll = getAll;
module.exports.create = create;
module.exports.getById = getById;
module.exports.update = update;
module.exports.remove = remove;