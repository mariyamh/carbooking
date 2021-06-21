/* eslint-disable no-param-reassign */
const validationResult = require('express-validator');
const models = require('../models');
const constants = require('../utils/errors');
const defaultResponse = require('../utils/defaultResponse');
const responseStatus = require('../utils/responseStatus');

const { Modal } = models;
const validate = require('../routes/modal.routes');

const getmodals = async (_req, res) => {
  try {
    const modals = await Modal.find()
      .sort([['name', 'descending']])
      .allowDiskUse();
    res.status(responseStatus.SUCCESS).json({ data: modals });
  } catch (err) {
    res.status(responseStatus.ERROR).json({ error: err.message });
  }
};

const saveModal = async (req, res) => {
  try {
    const newModal = await Modal.create({
      name: String(req.body.name),
      description: String(req.body.description),
      year: req.body.year,
    });
    res.json({ data: newModal });
  } catch (err) {
    res.json({ data: err.message });
  }
};
const getModal = async (req, res) => {
  const { id } = req.params;
  const modal = await Modal.findById(id, (err, docs) => {
    if (err) {
      res.status(responseStatus.ERROR).json({ data: err });
    } else {
      console.log('Result : ', docs);
    }
  });
  res.status(responseStatus.SUCCESS).json({ data: modal });
};

const update = async (req, res) => {
  try {
    const { userId } = req.params.id;

    Modal.findOne({ _id: req.params.id }, (err, doc) => {
      if (!err) {
        console.log(doc);
        if (!doc) {
          console.log('ok');
        }
        // eslint-disable-next-line no-param-reassign
        doc.name = req.body.name;
        doc.description = req.body.description;
        doc.year = req.body.year;
        doc.update();
        res.json({ data: responseStatus.SUCCESS });
      }
    });
  } catch (err) {
    res.json({ data: responseStatus.ERROR });
  }
};

const deleteModal = async (req, res) => {
  try {
    const modal = await Modal.findOne({ where: { id: req.params.id } });
    if (!modal) {
      res.status(responseStatus.NOTFOUNDSTATUSCODE).json({ data: responseStatus.NOTFOUNDMESSAGE });
    }
    await Modal.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ data: responseStatus.SuccessDELETEMESSAGE });
  } catch (err) {
    res.json({ data: responseStatus.ERRORMESSAGE });
  }
};

const modalMethods = {
  getmodals,
  saveModal,
  getModal,
  update,
  deleteModal,
};
module.exports = modalMethods;
