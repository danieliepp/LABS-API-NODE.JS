const Joi = require('@hapi/joi');


//Register validation
const registerValidation = data => {
    const schema = {
        username: Joi.string().required(),
        first_name: Joi.string().required(),
        last_name: Joi.string().required(),
        email: Joi.string().min(6).required().email(),
        country: Joi.string().required(),
        club: Joi.string().required(),
        password: Joi.string().min(6).required(),
        confirm_password: Joi.string().min(6).required()
    };
   return Joi.validate(data, schema);
}

//Login Validation
const loginValidation = data => {
    const schema = {
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    };
   return Joi.validate(data, schema);
}

//Participant Validation 
// const participantValidation = data => {
//     const schema = {
        
//     }
// };

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;