const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RelationSolicitudUserSchema = new Schema ({
  solicitudId: {
    type: Schema.Types.ObjectId,
    ref: 'NewSolicitude'
  },
  donanteId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
}, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
});

const  RelationSolicitudUser = mongoose.model('RelationSolicitudUser', RelationSolicitudUserSchema);
module.exports = RelationSolicitudUser;
