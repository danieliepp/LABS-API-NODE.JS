const mongoose = require('mongoose');

const coachesSchema = new mongoose.Schema ({
    coach_name: {
        type: String,
        required: true,
        max: 255
    },
    coach_country: {
        type: String,
        required: true,
        max: 255,
    },
    coach_club: {
        type: String,
        required: true,
        max: 255,
    }

},
{
    writeConcern: {
        w: 'majority',
        j: true,
        wtimeout: 1000
      }
});


module.exports = mongoose.model('coaches', coachesSchema);