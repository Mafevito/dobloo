const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = require('../models/User');
const Solicitude = require('../models/Solicitude');
const RelationSolicitudeUser = require('../models/RelationSolicitudeUser');
const router = express.Router();

function returnMessage(message){
  return (req,res,next) => res.status(500).json({error:true, message:message});
}
router.get('/relationNew/:id', (req, res, next) => {
  console.log(req.params.id);
  const solicitudId = req.params.id;
  RelationSolicitudeUser.find({solicitudId: solicitudId})
  .exec()
  .then(solicitudes => {
    promisesDonantes = solicitudes.map( s => {
      return new Promise((resolve, reject) => {
        s.populate('donanteId solicitudId', (err, solicitudPop) => {
          resolve(solicitudPop);
        });
      });
    });
    Promise.all(promisesDonantes).then((donantesPopulated) => {
      console.log(donantesPopulated);
      return res.status(200).json(donantesPopulated);
    });
})
.catch(err => {
  console.log(err);
  return res.status(500).json({
    message: 'Error getting relation',
    error: err
  });
});

  // Solicitude.findById(solicitudId).populate(user).exec().then( solicitude => {
  //   console.log(solicitude.solicitudes);
  //   User.populate(solicitudes, {path: user}, (err, solicitudes) => {
  //     res.status(200).send(solicitudes);
  //   });
  // }).catch(e => console.log(e));
});

router.post('/relationNew', (req, res, next) => {
  const relation = new RelationSolicitudeUser({
    solicitudId:req.body.solicitudeId,
    donanteId:req.body.userId
  });
  relation.save()
    .then( solicitude => {res.json({ message: 'New Relation created!' });})
    .catch(e => res.status(500).json(e));
});

module.exports = router;
