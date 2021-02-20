const mongoose = require('mongoose');

const cannabisSchema = new mongoose.Schema({
  strain: {type: String, required: true},
  type: String
}, {
  timestamps: true
});

const Cannabis = mongoose.model('Cannabis', cannabisSchema);

module.exports = Cannabis;