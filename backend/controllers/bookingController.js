import Booking from "../models/Booking.js";

export const krijoRezervim = async (req, res) => {
  try {
    const booking = await Booking.create({
      user: req.user._id,
      event: req.body.eventId,
      nrBiletash: req.body.nrBiletash
    });

    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

export const rezervimetEMia = async (req, res) => {
  try {
    const bookings = await Booking.find({
      user: req.user._id
    }).populate("event");

    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
export const anuloRezervim = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({
        message: "Rezervimi nuk u gjet",
      });
    }

    if (booking.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        message: "Nuk ke të drejtë ta anulosh këtë rezervim",
      });
    }

    await Booking.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Rezervimi u anulua me sukses",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

};
