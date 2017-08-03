const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const solicitudeSchema = new Schema({
  name: {
    type:String,
  },
  bloodType: {
    type:String,
  },
  birthDate: {
    type:String,
  },
  amountBlood:{
    type:String,
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
