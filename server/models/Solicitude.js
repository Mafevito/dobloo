const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const solicitudeSchema = new Schema({
  name: {
    type:String,
  },
  bloodType: {
    type:String,
  },
  years: {
    type:String,
  },
  amountBlood:{
    type:String,
  },
  city: {
    type: Object
  },
  reason: {
    type:String,
  },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const NewSolicitude = mongoose.model('NewSolicitude', solicitudeSchema);
module.exports = NewSolicitude;
