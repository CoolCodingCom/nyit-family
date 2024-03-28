const Sample = require("../models/sample.model");

const getSamples = async (req, res) => {
  try {
    const samples = await Sample.find({});
    res.status(200).json(samples);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSample = async (req, res) => {
  try {
    const { id } = req.params;
    const sample = await Sample.findById(id);
    res.status(200).json(sample);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createSample = async (req, res) => {
  try {
    const sample = await Sample.create(req.body);
    res.status(200).json(sample);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateSample = async (req, res) => {
  try {
    const { id } = req.params;

    const sample = await Sample.findByIdAndUpdate(id, req.body);

    if (!sample) {
      return res.status(404).json({ message: "Sample not found" });
    }

    const updatedSample = await Sample.findById(id);
    res.status(200).json(updatedSample);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteSample = async (req, res) => {
  try {
    const { id } = req.params;

    const sample = await Sample.findByIdAndDelete(id);

    if (!sample) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getSamples,
  getSample,
  createSample,
  updateSample,
  deleteSample,
};
