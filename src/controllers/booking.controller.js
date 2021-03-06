/* eslint-disable comma-dangle */
import { validationResult } from 'express-validator';

import { Booking, Car, User } from '../models';

import validate from '../routes/booking.routes';

const SuccessStatusCode = '200';
const SuccessUPDATEMESSAGE = 'Record Updated Successfully';
const SuccessDELETEMESSAGE = 'Record Deleted Successfully';
const ERRORStatusCode = '500';
const ERRORMESSAGE = 'something went wrong';
const INVALIDSTATUSCODE = '422';
const NOTFOUNDSTATUSCODE = '404';
const NOTFOUNDMESSAGE = 'Not found';

export const Bookings = async (_req, res) => {
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
    res.status(SuccessStatusCode).json({ data: blogs });
  } catch (err) {
    res.status(ERRORStatusCode).json({ error: err.message });
  }
};

export const saveBooking = async (req, res) => {
  try {
    validate.all('Booking');
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(INVALIDSTATUSCODE).json({ errors: errors.array() });
      return;
    }
    console.log(req.user);
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

export const getBooking = async (req, res) => {
  const booking = await Booking.findOne({ where: { id: req.params.id } });
  res.status(SuccessStatusCode).json({ data: booking });
};

export const update = async (req, res) => {
  try {
    const booking = await Booking.findOne({ where: { id: req.params.id } });
    if (!booking) {
      res.status(NOTFOUNDSTATUSCODE).json({ data: NOTFOUNDMESSAGE });
    }
    await Booking.update(
      {
        status: req.body.status,
      },
      { where: { id: req.params.id } }
    );
    res.status(SuccessStatusCode).json({ data: SuccessUPDATEMESSAGE });
  } catch (err) {
    res.json({ data: ERRORMESSAGE });
  }
};

export const deleteBooking = async (req, res) => {
  try {
    const booking = await Booking.findOne({ where: { id: req.params.id } });
    if (!booking) {
      res.status(NOTFOUNDSTATUSCODE).json({ data: NOTFOUNDMESSAGE });
    }
    await Booking.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(SuccessStatusCode).json({ data: SuccessDELETEMESSAGE });
  } catch (err) {
    res.json({ data: ERRORMESSAGE });
  }
};
