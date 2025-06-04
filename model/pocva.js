const mongoose = require("mongoose")

const pocvaSchema = new mongoose.Schema({
    ime: {
        type: String,
        require: [true, `You must enter the name`]
    },
    type: {
        type: String
    },
    ph: {
        type: Number,
        min: 0,
        max: 14
    },
    humus: {
        type: Number,
    },
    teksture: {
        type: String
    },
    boja: {
        type: String
    },
    lokacija: {
        type: String
    },
    nadmorskaVisina: {
        type: Number
    },
    karakteristiki: {
        type: String
    },
    kultura: [{
        type: String
    }],
    data: {
        type: String,
    },
    datumDodavanje: {
        type: Date, default: Date.now
    }

});

const Pocva = mongoose.model(`Pocva`, pocvaSchema)

module.exports = Pocva