const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const validator = require("validator")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, `You must enter your name`]
    },
    email: {
        type: String,
        require: [true, `You must enter your email`],
        lowercase: true,
        unique: true,
        validate: [validator.isEmail, `Your email is not valid`]
    },
    password: {
        type: String,
        required: [true, `You must enter your password`]
    }
});

userSchema.pre(`save`, async function (next) {
    if (!this.isModified(`password`)) return next();
    this.password = await bcrypt.hash(this.password, 12);
    next();
})

const User = mongoose.model(`User`, userSchema)

module.exports = User