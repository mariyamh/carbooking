const validationResult = require('express-validator');
const Modal = require('../models');
const validate = require('../routes/modal.routes');

const SuccessStatusCode = '200';
const SuccessUPDATEMESSAGE = 'Record Updated Successfully';
const SuccessDELETEMESSAGE = 'Record Deleted Successfully';
const ERRORStatusCode = '500';
const ERRORMESSAGE = 'something went wrong';
const INVALIDSTATUSCODE = '422';
const NOTFOUNDSTATUSCODE = '404';
const NOTFOUNDMESSAGE = 'Not found';

const Modals = async (_req, res) => {
  try {
    const modals = await Modal.findAll({
      order: [['id', 'DESC']],
    });
    res.status(SuccessStatusCode).json({ data: modals });
  } catch (err) {
    res.status(ERRORStatusCode).json({ error: err.message });
  }
};

const saveModal = async (req, res) => {
  try {
    validate.all('Modal');
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(INVALIDSTATUSCODE).json({ errors: errors.array() });
      return;
    }
    const newModal = await Modal.create({
      name: String(req.body.name),
      description: String(req.body.description),
    });
    res.json({ data: newModal });
  } catch (err) {
    res.json({ data: err.message });
  }
};
const getModal = async (req, res) => {
  const modal = await Modal.findOne({ where: { id: req.params.id } });
  res.status(SuccessStatusCode).json({ data: modal });
};

const update = async (req, res) => {
  try {
    const modal = await Modal.findOne({ where: { id: req.params.id } });
    if (!modal) {
      res.status(NOTFOUNDSTATUSCODE).json({ data: NOTFOUNDMESSAGE });
    }
    await Modal.update(
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

const deleteModal = async (req, res) => {
  try {
    const modal = await Modal.findOne({ where: { id: req.params.id } });
    if (!modal) {
      res.status(NOTFOUNDSTATUSCODE).json({ data: NOTFOUNDMESSAGE });
    }
    await Modal.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(SuccessStatusCode).json({ data: SuccessDELETEMESSAGE });
  } catch (err) {
    res.json({ data: ERRORMESSAGE });
  }
};

module.exports = [Modals, saveModal, getModal, update, deleteModal];
