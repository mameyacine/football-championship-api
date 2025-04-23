const mongoose = require('mongoose');

  // models/Day.js
  const daySchema = new mongoose.Schema({
    number: String,
    idChampionship: { type: mongoose.Schema.Types.ObjectId, ref: 'Championship' },
  });
  
  module.exports = mongoose.model('Day', daySchema);
  
  