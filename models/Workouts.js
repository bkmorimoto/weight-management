var mongoose = require('mongoose');

var WorkoutSchema = new mongoose.Schema({
  name: String,
  target: String,
  weights: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Weight' }]
});

mongoose.model('Workout', WorkoutSchema);