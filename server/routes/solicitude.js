const express = require('express');
const router = express.Router();

const Solicitude = require('../models/Solicitude');

function returnMessage(message){
  return (req,res,next) => res.status(500).json({error:true, message:message});
}

router.get('/', (req, res) => {
  Solicitude.find().then( (solicitude) => {
    res.json(solicitude);
  });
});

router.post('/', (req, res, next) => {

  const { name, bloodType, birthDate, amountBlood, reason} = req.body;

  if(!name || !bloodType || !amountBlood) {
    res.status(400).json({
      message: 'Provide the dates'
    });
    return;
  }
  console.log(req.body);
  //res.json('holi');
  //res.json(req.body);
  const solicitude = new Solicitude ({
    name: req.body.name,
    bloodType: req.body.bloodType,
    amountBlood: req.body.amountBlood,
    reason: req.body.reason,
  });

  console.log(solicitude);

  solicitude.save()
  .then(solicitude => {
    console.log('New solicitude created!');
    res.status(200).json({
      message: 'New solicitude has been created!',
    });
  })
  .catch(e => res.status(500).json(e));

  solicitude.find({}).then(solicitudes => {
    res.json(solicitudes);
  })
  .catch(e => res.status(500).json(e));
  });

module.exports = router;
