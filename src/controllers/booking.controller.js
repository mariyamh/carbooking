const { Booking, Car, User } = require('../models');
const defaultResponse = require('../utils/defaultResponse');
const constants = require('../utils/errors');
const responseStatus = require('../utils/responseStatus');

const bookings = async (_req, res) => {
  try {
    const blogs = await Booking.findAll({
      include: {
        model: Car,
        as: 'Car',
        include: {
          model: User,
          as: 'User',
        },
      },
      order: [['id', 'DESC']],
    });
    res.status(responseStatus.SUCCESS).json({ data: blogs });
  } catch (err) {
    res.status(responseStatus.ERROR).json({ error: err.message });
  }
};

const saveBooking = async (req, res) => {
  try {
    // check if no error

    const newBooking = await Booking.create({
      carId: Number(req.car.carId),
      userId: Number(req.user.id),
      status: req.body.status,
    });
    res.json({ data: newBooking });
  } catch (err) {
    res.json({ data: err.message });
  }
};

const getBooking = async (req, res) => {
  const booking = await Booking.findOne({ where: { id: req.params.id } });
  res.status(responseStatus.SUCCESS).json({ data: booking });
};

const update = async (req, res) => {
  try {
    const booking = await Booking.findOne({ where: { id: req.params.id } });
    if (!booking) {
      res.status(responseStatus.NOTFOUNDSTATUSCODE).json({ data: responseStatus.NOTFOUNDMESSAGE });
    }
    await Booking.findOneAndUpdate({ _id: req.params.id }, (err, doc) => {
      if (err) {
        defaultResponse.error({ message: err }, responseStatus.ERROR);
      }
    });
    res.status(responseStatus.SuccessStatusCode).json({ data: responseStatus.SUCCESS });
  } catch (err) {
    res.json({ data: err });
  }
};

const deleteBooking = async (req, res) => {
  try {
    const booking = await Booking.findOne({ where: { id: req.params.id } });
    if (!booking) {
      res.status(responseStatus.ERROR).json({ data: responseStatus.NOTFOUNDMESSAGE });
    }
    await Booking.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(responseStatus.SuccessStatusCode).json({ data: responseStatus.SUCCESS });
  } catch (err) {
    res.json({ data: responseStatus.ERROR });
  }
};
const bookingMethods = {
  bookings,
  saveBooking,
  getBooking,
  update,
  deleteBooking,
};
module.exports = bookingMethods;
