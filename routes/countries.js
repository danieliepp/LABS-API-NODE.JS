const router = require('express').Router();
const Countries = require('../model/countries');

router.get('/get_countries', async (req, res) => {
  Countries.find({}, function (err, countries){
      if(err){
          res.status(400).send('Something went wrong!');
          next();
      } else {
          res.json(countries);
      }
  })
});

module.exports = router;