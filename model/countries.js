const mongoose = require('mongoose');

const countriesSchema = new mongoose.Schema ({
    country_code: {
        type: String,
        required: true,
        max: 255
    },
    country_name: {
        type: String,
        required: true,
        max: 255,
        min: 6
    }
},
{
    writeConcern: {
        w: 'majority',
        j: true,
        wtimeout: 1000
      }
});


module.exports = mongoose.model('countries', countriesSchema);