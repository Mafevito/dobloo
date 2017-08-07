const express = require('express');
const router = express.Router();

const Solicitude = require('../models/Solicitude');

function returnMessage(message){
  return (req,res,next) => res.status(500).json({error:true, message:message});
}

router.get('/', (req, res) => {
  console.log("hola");
  Solicitude.find().then( (solicitude) => {
    res.json(solicitude);
  });
});

router.post('/', (req, res, next) => {

  const { name, bloodType, birthDate, amountBlood, city, reason} = req.body;

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
    city: req.body.city,
    reason: req.body.reason,
  });
  console.log(solicitude);

// Guardar
  solicitude.save()
  .then(solicitude => {
    console.log('New solicitude created!');
    res.status(200).json({
      message: 'New solicitude has been created!',
    });
  })
  .catch(e => res.status(500).json(e));
  });

// Editar una solicitud especifica
  router.get('/:id', (req,res,next) => {
    Solicitude.findById(req.params.id).then(solicitude =>{
      res.json(solicitude);
    })
    .catch( e => res.json(e));
  });

// Mostrar una solicitud especifica
  router.get('/:id', (req,res,next) => {
    Solicitude.findById(req.params.id).then(solicitude =>{
      res.json(solicitude);
    })
    .catch( e => res.json(e));
  });

// Eliminar por id
  router.delete('/:id', (req,res,next) => {
    console.log(req);
    Solicitude.remove({ _id: req.params.id }).then( () =>{
      res.json({
        message:"Solicitude removed"
      });
    })
    .catch( e => res.json(e));
  });


module.exports = router;
