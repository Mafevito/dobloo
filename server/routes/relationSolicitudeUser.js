const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = require('../models/User');
const Solicitude = require('../models/Solicitude');
const RelationSolicitudeUser = require('../models/RelationSolicitudeUser');
const router = express.Router();

router.get('/relationSolicitudeUser', (req, res) => {
  const solicitudId = req.params.id;
  Solicitude.findById(solicitudId).populate("solicitudes").exec().then( solicitude => {
    console.log(solicitude.solicitudes);
    // User.populate(solicitudes, {path: user}, (err, solicitudes) => {
    //   res.status(200).send(solicitudes);
    // });
  }).catch(e => console.log(e));
});

router.post('/relationSolicitudeUser', (req, res, next) => {
  // const{ solicitudID }

});

module.exports = router;
