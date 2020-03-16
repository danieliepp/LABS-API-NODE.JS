const router = require('express').Router();
const Coaches = require('../model/coaches');

router.get('/get_coaches', async (req, res) => {
  Coaches.find({}, function (err, coaches){
      if(err){
          res.status(400).send('Something went wrong!');
          next();
      } else {
          res.json(coaches);
      }
  })
});

module.exports = router;