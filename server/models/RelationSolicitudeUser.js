const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RelationSolicitudUserSchema = new Schema ({
  solicitudID: {
    type: Schema.ObjectId, ref: 'NewSolicitude'
  },
  idDonante: {
    type: Schema.ObjectId, ref: 'User'
  },
}, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
});

const  RelationSolicitudUser = mongoose.model('RelationSolicitudUser', RelationSolicitudUserSchema);
module.exports = RelationSolicitudUser;
