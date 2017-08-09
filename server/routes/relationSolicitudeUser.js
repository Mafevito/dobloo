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

router.get('/user-donations/:id', (req, res) => {
  const loggedUser = req.params.id;
  RelationSolicitudeUser.find({"donanteId": loggedUser})
  .populate('solicitudId').exec()
  .then( donations => {
    res.json(donations);
  }).catch(error => { res.json(error); });
});

router.post('/relation-sd', (req, res, next) => {
  const relation = new RelationSolicitudeUser({
    solicitudId:req.body.solicitudeId,
    donanteId:req.body.userId
  });
  relation.save()
    .then( solicitude => {res.json({ message: 'New Relation created!' });})
    .catch(e => res.status(500).json(e));
});


module.exports = router;
