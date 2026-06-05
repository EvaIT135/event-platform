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
};
