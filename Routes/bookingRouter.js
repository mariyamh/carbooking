/* eslint-disable no-unused-vars */
const express = require('express');

const bookingRouter = express.Router();

const mongoose = require('mongoose');

const Dishes = require('../Models/booking');

bookingRouter.all('/', (req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  next();
});

bookingRouter.get('/', (req, res, next) => {
  res.end('Will send all the bookings to you!');
});

bookingRouter.post('/', (req, res, next) => {
  res.end(`Will add the booking: ${req.body.name} with details: ${req.body.description}`);
});

bookingRouter.put('/', (req, res, next) => {
  res.statusCode = 403;
  res.end('PUT operation not supported on /bookings');
});

bookingRouter.delete('/', (req, res, next) => {
  res.end('Deleting all bookings');
});

bookingRouter.get('/:bookingId', (req, res, next) => {
  res.end(`Will send details of the booking: ${req.params.bookingId} to you!`);
});

bookingRouter.post('/:bookingId', (req, res, next) => {
  res.statusCode = 403;
  res.end(`POST operation not supported on /bookings/${req.params.bookingId}`);
});

bookingRouter.put('/:bookingId', (req, res, next) => {
  res.write(`Updating the booking: ${req.params.bookingId}\n`);
  res.end(`Will update the booking: ${req.body.name} with details: ${req.body.description}`);
});

bookingRouter.delete('/:bookingId', (req, res, next) => {
  res.end(`Deleting booking: ${req.params.bookingId}`);
});

module.exports = bookingRouter;
