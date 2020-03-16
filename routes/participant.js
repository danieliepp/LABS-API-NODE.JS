const router = require('express').Router();
const Participant = require('../model/participant');

router.post('/add_participant', async (req, res) => {
    const participant = new Participant({
        name: req.body.name,
        country: req.body.country,
        club: req.body.club,
        coach: req.body.coach,
        birthday: req.body.birthday,
        weight: req.body.weight,
        age: req.body.age,
        gender: req.body.gender
    });

    try{
        Participant.find({}, function (err, participants) {
            for(let value of Object.values(participants)) {
                if(value.name == participant.name){
                    var name = value.name;
                }
            }
            if(name == participant.name) {
               res.status(200).send({msg: "Participant with this name already exists"});
            }else {
                const savedParticipant = participant.save();
                res.status(200).send({msg: "participant added"})
            }
        });
    } catch(error) {
        res.status(400).send(error);
    }
});

router.get('/get_participants', async (req, res) => {
  Participant.find({}, function (err, participants){
      if(err){
          res.status(400).send('Something went wrong!');
          next();
      } else {
          res.json(participants);
      }
  })
});

module.exports = router;