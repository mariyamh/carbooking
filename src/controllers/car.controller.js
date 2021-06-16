const validationResult = require('express-validator');
const Modal = require('../models');
const Car = require('../models');
const validate = require('../routes/car.routes');

const SuccessStatusCode = '200';
const SuccessUPDATEMESSAGE = 'Record Updated Successfully';
const SuccessDELETEMESSAGE = 'Record Deleted Successfully';
const ERRORStatusCode = '500';
const ERRORMESSAGE = 'something went wrong';
const INVALIDSTATUSCODE = '422';
const NOTFOUNDSTATUSCODE = '404';
const NOTFOUNDMESSAGE = 'Not found';
const Cars = async (_req, res) => {
  try {
    const blogs = await Car.findAll({
      include: {
        model: Modal,
        as: 'Modal',
      },
      order: [['id', 'DESC']],
    });
    res.status(SuccessStatusCode).json({ data: blogs });
  } catch (err) {
    res.status(ERRORStatusCode).json({ error: err.message });
  }
};

const saveCar = async (req, res) => {
  try {
    validate.all('Car');
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(INVALIDSTATUSCODE).json({ errors: errors.array() });
      return;
    }
    const newCar = await Car.create({
      name: String(req.body.name),
      description: String(req.body.description),
      modal: String(req.modal.id),
      plateNumber: String(req.body.plateNumber),
    });
    res.json({ data: newCar });
  } catch (err) {
    res.json({ data: err.message });
  }
};

const getCar = async (req, res) => {
  const car = await Car.findOne({ where: { id: req.params.id } });
  res.status(SuccessStatusCode).json({ data: car });
};

const update = async (req, res) => {
  try {
    const car = await Car.findOne({ where: { id: req.params.id } });
    if (!car) {
      res.status(NOTFOUNDSTATUSCODE).json({ data: NOTFOUNDMESSAGE });
    }
    await Car.update(
      {
        status: req.body.status,
      },
      // eslint-disable-next-line comma-dangle
      { where: { id: req.params.id } }
    );
    res.status(SuccessStatusCode).json({ data: SuccessUPDATEMESSAGE });
  } catch (err) {
    res.json({ data: ERRORMESSAGE });
  }
};

const deleteCar = async (req, res) => {
  try {
    const car = await Car.findOne({ where: { id: req.params.id } });
    if (!car) {
      res.status(NOTFOUNDSTATUSCODE).json({ data: NOTFOUNDMESSAGE });
    }
    await Car.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(SuccessStatusCode).json({ data: SuccessDELETEMESSAGE });
  } catch (err) {
    res.json({ data: ERRORMESSAGE });
  }
};

module.exports = [Cars, saveCar, getCar, update, deleteCar];
