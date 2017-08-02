const express = require('express');
const router = express.Router();

const NewSolicitud = require('../models/NewSolicitud');

function returnMessage(message){
  return (req,res,next) => res.status(500).json({error:true, message:message});
}
router.get('/', returnMessage("This should be a POST"));
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
  // res.json(req.body);
  const newSolicitud = new NewSolicitud ({
    name: req.body.name,
    bloodType: req.body.bloodType,
    amountBlood: req.body.amountBlood,
    reason: req.body.reason,
  });

  console.log(newSolicitud);

  newSolicitud.save()
  .then(solicitud => {
    console.log('New solicitud created!');
    res.status(200).json({
      message: 'New solicitud has been created!',
    });
  })
  .catch(e => res.status(500).json(e));
});

module.exports = router;
