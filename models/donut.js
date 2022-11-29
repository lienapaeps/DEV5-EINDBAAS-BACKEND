const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const donutSchema = new Schema({
    naam: { type: String, required: true },
    glazuur: { type: String, required: true },
    topping: { type: String, required: true },
    logo: { type: String, required: true },
    logoVorm: { type: String, required: true },
});

const Donut = mongoose.model('Donut', donutSchema);

module.exports = Donut;