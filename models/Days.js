var mongoose = require('mongoose');

var DaySchema = new mongoose.Schema({
  name: String,
  number: Number,
  week: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Week' }],
  weights: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Weight' }]
});

mongoose.model('Day', DaySchema);