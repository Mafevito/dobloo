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
router.get('/relationSolicitudeUser', (req, res) => {
  const solicitudId = req.params.id;
  console.log("yellow");
  Solicitude.findById(solicitudId).populate(user).exec().then( solicitude => {
    console.log(solicitude.solicitudes);
    User.populate(solicitudes, {path: user}, (err, solicitudes) => {
      res.status(200).send(solicitudes);
    });
  }).catch(e => console.log(e));
});

router.post('/relationNew', (req,res,next) => {
  const relation = new RelationSolicitudeUser({
    solicitudId:req.body.solicitudeId,
    donanteId:req.body.userId
  });
  relation.save()
    .then( solicitude => {res.json({ message: 'New Relation created!' });})
    .catch(e => res.status(500).json(e));
});

module.exports = router;
