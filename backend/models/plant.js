const mongoose = require("mongoose");

const plantSchema = new mongoose.Schema({
  plantId: {
    type: Number,
    required: true,
  },
  imageUrl: String,
  wateringLevel: String,
  sunlightLevel: String,
  description: String,
  commonName: String,
  scientificName: String,
  wateringNotes: String,
  sunlightNotes: String,
  pruningNotes: String,
  careLevel: String,
});

module.exports = mongoose.model("Plant", plantSchema);
