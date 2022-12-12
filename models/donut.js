const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const donutSchema = new Schema({
    email: { type: String, required: true },
    nameCompany: { type: String, required: true },
    nameDonut: { type: String, required: true },
    icing: { type: String, required: true },
    topping: { type: String, required: true },
    logo: { type: String, required: true },
    logoShape: { type: String, required: true },
    status: { type: String, required: true },
    // imageURL: { type: String, required: true },
});

const Donut = mongoose.model('Donut', donutSchema);

module.exports = Donut;