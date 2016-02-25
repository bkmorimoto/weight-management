var mongoose = require('mongoose');

var WeightSchema = new mongoose.Schema({
  name: String,
  number: Number,
  day: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Day' }],
  workout: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Workout' }]
});

mongoose.model('Weight', WeightSchema);