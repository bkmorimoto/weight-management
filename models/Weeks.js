var mongoose = require('mongoose');

var WeekSchema = new mongoose.Schema({
  name: String,
  number: Number,
  days: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Day' }]
});

mongoose.model('Week', WeekSchema);