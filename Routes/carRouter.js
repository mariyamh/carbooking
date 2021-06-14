/* eslint-disable no-unused-vars */
const express = require('express');

const carRouter = express.Router();

const mongoose = require('mongoose');

const Dishes = require('../Models/car');

carRouter.all('/', (req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  next();
});

carRouter.get('/', (req, res, next) => {
  res.end('Will send all the cars to you!');
});

carRouter.post('/', (req, res, next) => {
  res.end(`Will add the car: ${req.body.name} with details: ${req.body.description}`);
});

carRouter.put('/', (req, res, next) => {
  res.statusCode = 403;
  res.end('PUT operation not supported on /cars');
});

carRouter.delete('/', (req, res, next) => {
  res.end('Deleting all cars');
});

carRouter.get('/:carId', (req, res, next) => {
  res.end(`Will send details of the car: ${req.params.carId} to you!`);
});

carRouter.post('/:carId', (req, res, next) => {
  res.statusCode = 403;
  res.end(`POST operation not supported on /cars/${req.params.carId}`);
});

carRouter.put('/:carId', (req, res, next) => {
  res.write(`Updating the car: ${req.params.carId}\n`);
  res.end(`Will update the car: ${req.body.name} with details: ${req.body.description}`);
});

carRouter.delete('/:carId', (req, res, next) => {
  res.end(`Deleting car: ${req.params.carId}`);
});

module.exports = carRouter;
