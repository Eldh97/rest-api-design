const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PathSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: String,
  levels: [
    {
      title: {
        type: String,
        required: true,
      },
      description: String,
    },
  ],
  links: [
    {
      name: {
        type: String,
        required: true,
      },
      href: {
        type: String,
        required: true,
      },
    },
  ],

  roadmapTitle: String,
  roadmapId: String,
});

module.exports = Path = mongoose.model("path", PathSchema);