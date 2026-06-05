import Event from "../models/Event.js";

// GET - Merr të gjitha eventet
export const merrEventet = async (req, res) => {
  try {
    const eventet = await Event.find();

    res.status(200).json(eventet);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// GET - Merr një event sipas ID
export const merrEventin = async (req, res) => {
  try {
    const eventi = await Event.findById(req.params.id);

    if (!eventi) {
      return res.status(404).json({
        message: "Eventi nuk u gjet",
      });
    }

    res.status(200).json(eventi);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// POST - Shto event
export const krijoEvent = async (req, res) => {
  try {
    const eventi = await Event.create(req.body);

    res.status(201).json(eventi);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// PUT - Përditëso event
export const perditesoEvent = async (req, res) => {
  try {
    const eventi = await Event.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!eventi) {
      return res.status(404).json({
        message: "Eventi nuk u gjet",
      });
    }

    res.status(200).json(eventi);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// DELETE - Fshi event
export const fshiEvent = async (req, res) => {
  try {
    const eventi = await Event.findByIdAndDelete(req.params.id);

    if (!eventi) {
      return res.status(404).json({
        message: "Eventi nuk u gjet",
      });
    }

    res.status(200).json({
      message: "Eventi u fshi me sukses",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
