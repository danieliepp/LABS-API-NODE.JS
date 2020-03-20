const router = require('express').Router();
const User = require('../model/user');
const { registerValidation, loginValidation } = require('../validation');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


router.post('/register', async (req, res) => {

//Validate data before creating a user
const { error } = registerValidation(req.body);
if(error) return res.status(400).send(error.details[0].message);

//Checking if the user is already in the database
const emailExist = await User.findOne({email: req.body.email});
if(emailExist) return res.status(400).send('Email already exists');

//HashPasswords
const salt = await bcrypt.genSalt(10);
const hashPassword = await bcrypt.hash(req.body.password, salt);
//Create new User
    User.create({
        username: req.body.username,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        country: req.body.country,
        club: req.body.club,
        password: hashPassword,
        confirm_password: hashPassword
    },
    function (err, user) {
        if (err) return res.status(500).send("There was a problem registering the user.")
        // create a token
        var token = jwt.sign({ id: user._id }, process.env.TOKEN_SECRET, {
          expiresIn: 86400 // expires in 24 hours
        });
        res.send({  success: true, token: token});
      });
});

//LOGIN
router.post('/login', async (req, res) => {

//VALIDATE THE DATA BEFORE WE A USER
    const { error } = loginValidation(req.body);
    if(error) return res.status(400).send({success: false});
        //Checking if the user is already in the database
        const user = await User.findOne({email: req.body.email});
        if(!user) return res.status(400).send({msg: "email doesn't exists"});
        //Password is correct
        const validPass = await bcrypt.compare(req.body.password, user.password);
        console.log(user.password);
        console.log(req.body.password);
        if(!validPass) return res.status(400).send({msg: "password is incorrect"});

        //Create and assign a token
        const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET, {
            expiresIn: 86400 // expires in 24 hours
        });
        if(error){
            res.status(400).send({success: false});
        }else{ 
            res.status(200).send({success: true, first_name: user.first_name, last_name: user.last_name, club: user.club, country: user.country, token: token, _id: user._id});
    }
       
});

module.exports = router;