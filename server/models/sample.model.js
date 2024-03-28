const mongoose = require("mongoose");

const SampleSchema = mongoose.Schema(
  {
    value: {
      type: String,
      required: [true, "Please enter sample content"],
    },

    description: {
      type: String,
      required: [true, "Please enter sample description"],
    },
  },
  {
    timestamps: true,
  }
);

const Sample = mongoose.model("Sample", SampleSchema);

module.exports = Sample;
