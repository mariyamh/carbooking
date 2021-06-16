const Router = require('express');
const userRoutes = require('./user.routes');
const car = require('./car.routes');
const booking = require('./booking.routes');
const modal = require('./modal.routes');
const authToken = require('../utils/apiToken');

const router = Router();

const routes = () => {
  router.get('/', (_req, res) => {
    res.json({ message: `Server is running on ${process.env.PORT}` });
  });
  router.use('/car', authToken, car);
  router.use('/booking', authToken, booking);
  router.use('/modal', authToken, modal);
  router.use(userRoutes);
  return router;
};

module.exports = routes;
