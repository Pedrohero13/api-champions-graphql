const mongoose = require("mongoose")

const Schema = mongoose.Schema

const championSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  rarity: {
    type: String,
  },
  faction: {
    type: String,
  },
  type: {
    type: String,
  },
  element: {
    type: String,
  },
  
  stats: {
    health: {
      type: String,
      required: true
    },
    attack: {
      type: String,
      required: true
    },
    defense: {
      type: String,
      required: true
    },
    criticalRate: {
      type: String,
      required: true
    },
    criticalDamage: {
      type: String,
      required: true
    },
    speed: {
      type: String,
      required: true
    },
    resistance: {
      type: String,
      required: true
    },
    accuracy: {
      type: String,
      required: true
    },
  },
  image: {
    type: String,
    required: true
  }
},
{ timestamps: true }

);
module.exports = Champion = mongoose.model('champions', championSchema);