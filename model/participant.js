const mongoose = require('mongoose');

const participantSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    country: {
        type: String,
        required: true,
        max: 255,
        min: 6
    },
    club: {
        type: String,
        required: true,
        max: 1024,
        min: 6
    },
    coach: {
        type: String,
        required: true,
        max: 1024,
        min: 6
    },
    birthday: {
        type: Date,
        required: true 
    },
    weight: {
        type: Number,
        required: true,
        max: 200
    },
    age: {
        type: String,
        required: true,
        max: 70
    },
    gender: {
        type: String,
        required: true,
        max: 10
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


module.exports = mongoose.model('participant', participantSchema);