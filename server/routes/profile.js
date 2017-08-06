const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RelationSolicitudeUser = require('../models/RelationSolicitudeUser');
const router = express.Router();

router.get('/', (req, res) => {
  RelationSolicitudeUser.find().then( (user) => {
    res.json(user);
  });
});
