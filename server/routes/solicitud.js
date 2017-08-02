const express = require('express');
const router = express.Router();

const UserSolicitud = require('../models/UserSolicitud');

router.get('/', (req, res) => {
  res.json('holi');
});

module.exports = router;
