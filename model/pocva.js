const mongoose = require("mongoose")

const pocvaSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, `You must enter the name`]
    },
    data: {
        type: String,
        require: [true, `You must enter data`]
    },
});

const Pocva = mongoose.model(`Pocva`, pocvaSchema)

module.exports = Pocva