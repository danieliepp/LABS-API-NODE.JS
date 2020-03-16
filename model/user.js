const mongoose = require('mongoose');

const userSchema = new mongoose.Schema ({
    username: {
        type: String,
        required: true,
        max: 255
    },
    first_name: {
        type: String,
        required: true,
        max: 255
    },
    last_name: {
        type: String,
        required: true,
        max: 255
    },
    email: {
        type: String,
        required: true,
        max: 255,
        min: 6
    },
    country: {
        type: String,
        required: true,
        max: 255
    },
    club: {
        type: String,
        required: true,
        max: 255
    },
    password: {
        type: String,
        required: true,
        max: 1024,
        min: 6
    },
    confirm_password: {
        type: String,
        required: true,
        max: 1024,
        min: 6
    },
    date: {
        type: Date,
        default: Date.now
    }
},
{
    writeConcern: {
        w: 'majority',
        j: true,
        wtimeout: 1000
      }
});


module.exports = mongoose.model('user', userSchema);