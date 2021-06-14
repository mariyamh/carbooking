/* eslint-disable no-unused-vars */
const express = require('express');

const modalRouter = express.Router();

const mongoose = require('mongoose');

const Dishes = require('../Models/modal');

modalRouter.all('/', (req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  next();
});

modalRouter.get('/', (req, res, next) => {
  res.end('Will send all the modals to you!');
});

modalRouter.post('/', (req, res, next) => {
  res.end(`Will add the modal: ${req.body.name} with details: ${req.body.description}`);
});

modalRouter.put('/', (req, res, next) => {
  res.statusCode = 403;
  res.end('PUT operation not supported on /modals');
});

modalRouter.delete('/', (req, res, next) => {
  res.end('Deleting all modals');
});

modalRouter.get('/:modalId', (req, res, next) => {
  res.end(`Will send details of the modal: ${req.params.modalId} to you!`);
});

modalRouter.post('/:modalId', (req, res, next) => {
  res.statusCode = 403;
  res.end(`POST operation not supported on /modalss/${req.params.modalId}`);
});

modalRouter.put('/:modalId', (req, res, next) => {
  res.write(`Updating the modal: ${req.params.modalId}\n`);
  res.end(`Will update the modal: ${req.body.name} with details: ${req.body.description}`);
});

modalRouter.delete('/:modalId', (req, res, next) => {
  res.end(`Deleting modal: ${req.params.modalId}`);
});

module.exports = modalRouter;
