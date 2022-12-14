const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const donutSchema = new Schema({
    email: { type: String, required: true },
    nameCompany: { type: String, required: true },
    nameDonut: { type: String, required: true },
    street: { type: String, required: true },
    streetNumber: { type: String, required: true },
    postalCode: { type: String, required: true },
    city: { type: String, required: true },
    remarks: { type: String, required: false },
    icing: { type: String, required: true },
    topping: { type: String, required: true },
    logo: { type: String, required: true },
    logoShape: { type: String, required: true },
    status: { type: String, required: true },
    imageUrl: { type: String, required: true },
    donutAmount : { type: Number, required: true },
    dateCreated: { type: Date, default: Date.now }
});

const Donut = mongoose.model('Donut', donutSchema);

module.exports = Donut;