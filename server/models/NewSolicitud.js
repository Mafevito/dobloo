const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const solicitudSchema = new Schema({
  name: String,
  bloodType: String,
  birthDate: String,
  amountBlood: String,
  reason: String,
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const NewSolicitud = mongoose.model('NewSolicitud', solicitudSchema);
module.exports = NewSolicitud;
