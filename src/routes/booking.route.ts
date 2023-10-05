import express, { Router } from 'express';
import AuthMiddleware from '../middlewares/auth.middleware';
import BookingController from '../controllers/booking.controller';

const bookingRouter: Router = express.Router();

const authInstance = new AuthMiddleware();
const bookingInstance = new BookingController();

// create a booking
bookingRouter.post(
  '/create/:bid',
  authInstance.isAuthenticated,
  bookingInstance.createAbooking
);

// delete a booking
bookingRouter.delete(
  '/:bid',
  authInstance.isAuthenticated,
  bookingInstance.deleteAbooking
);

// get all bookings
bookingRouter.get(
  '/',
  authInstance.isAuthenticated,
  authInstance.isAdmin,
  bookingInstance.getAllbookings
);

export default bookingRouter;
