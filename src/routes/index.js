import { Router } from 'express';
import userRoutes from './user.routes';
import car from './car.routes';
import booking from './booking.routes';
import modal from './modal.routes';
import authToken from '../utils/apiToken';

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

export default routes;
