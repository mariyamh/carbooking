const Router = require('express');
const { body } = require('express-validator');
const bookingMethods = require('../controllers/booking.controller');

const validate = (method) => {
  if (method !== 'Booking') return [body('parameters').isEmpty()];

  return [body('userId').notEmpty(), body('carId').notEmpty(), body('status').isInt().notEmpty()];
};
const router = Router();

/**
 * @api {get} api/booking/list show all Bookings
 * @apiName list
 * @apiGroup Booking
 *@apiVersion 0.1.0
 * @apiHeader (Header) {String} authorization Authorization Bearer token
 *
 *@apiSuccessExample Response Body
 *[{
 *     "id": 1,
 *     "carId": 3,
 *     "bookingDate": "2021-01-05T07:01:49.644Z"
 *    "userId": 1,
 *    "status": 1,
 *    "updatedAt": "2021-01-05T07:01:49.644Z",
 *    "createdAt": "2021-01-05T07:01:49.644Z",
 *    "deletedAt": null  }]
 *
 * @apiSuccess {Objects[]} Bookings Array of bookings
 *
 *@apiErrorExample Response Body:
 *{
 * "message":"access denied"
 *}
 *@apiError {String} Authorization authorization is missing or invalid
 */

router.get('/list', bookingMethods.bookings);
/**
 * @api {get} api/booking/:id show booking by Id
 * @apiName getBooking
 * @apiGroup Booking
 *@apiVersion 0.1.0
 * @apiHeader (Header) {String} authorization Authorization Bearer token
 * @apiParam (Params) {Number} id booking id is required
 *@apiSuccessExample Response body
 *{
 *  "data": {
 *     "id": 5,
 *     "carId": 4,
 *    "userId": 1,
 *    "status": 1,
 *    "updatedAt": "2021-01-05T07:01:49.644Z",
 *    "createdAt": "2021-01-05T07:01:49.644Z",
 *    "deletedAt": null
 *  }
 *}
 *
 * @apiSuccess {Objects}  Object object of Booking
 *
 *@apiErrorExample Response Body:
 *{
 * "message":"access denied"
 *}
 *@apiError {String} Authorization authorization is missing or invalid
 *@apiErrorExample Response Body:
 *{
 * "error":"Params is required"
 *}
 *@apiError {Number} id params id must be required
 *@apiErrorExample Response Body:
 *{
 * "error":"Booking with this id not found"
 *}
 *@apiError {Number} id params id is invalid
 */

router.get('/:id', bookingMethods.getBooking);
/**
 * @api {post} api/booking/create create booking
 * @apiName createEvent
 * @apiGroup Booking
 *@apiVersion 0.1.0
 * @apiHeader (Header) {String} authorization Authorization Bearer token
 *
 * @apiParam {Number} carId  carId for car reference
 * @apiParam {Number} userId userId for user reference
 * @apiParam {date} date  date of booking
 * @apiParam {Number} status Status of Booking (0|1)
 *
 *@apiParamExample Request Body:
 *{
 * "carId":"4",
 * "userId":1,
 * "bookingDate":"12-04-2021",
 * "status":0|1
 *}
 *
 * @apiSuccess {Number} id Booking Id
 * @apiSuccess {Number} carId id of car
 * @apiSuccess {Number} userId id of user
 * @apiSuccess {String} status Booking status
 *@apiSuccessExample Response body
 *{
 *  "data": {
 *     "id": 5,
 *    "carId": 4,
 *    "userId": 1,
 *    "status": 1,
 *    "updatedAt": "2021-01-05T07:01:49.644Z",
 *    "createdAt": "2021-01-05T07:01:49.644Z",
 *    "deletedAt": null
 *  }
 *}
 *
 *@apiErrorExample Response Body:
 *{
 * "userId":"User id field is required",
 * "status":"status field is required"
 *}
 *
 * @apiError {String} status Booking date
 *@apiErrorExample Response Body:
 *{
 * "message":"access denied"
 *}
 *@apiError {String} Authorization authorization is missing or invalid
 */
router.post('/create', validate('Booking'), bookingMethods.saveBooking);
/**
 * @api {put} api/Booking/update/:id update Booking
 * @apiName update
 * @apiGroup Booking
 *@apiVersion 0.1.0
 * @apiHeader (Header) {String} authorization Authorization Bearer token
 *
 * @apiParam {String} title Booking of the Booking
 * @apiParam {Number} userId userId of the Booking
 * @apiParam {String} description Description of the Booking
 * @apiParam {Number} status Status of Booking (0|1)
 *@apiParamExample Request Body:
 *{
 * "title":"name",
 * "userId":1,
 * "description":"description",
 * "status":0|1
 *}
 *@apiSuccessExample Response Body
 *{
 *  "data": {
 *     "id": 5,
 *     "title": "title of the Booking",
 *    "description": "description of the Booking",
 *    "userId": 1,
 *    "status": 1,
 *    "updatedAt": "2021-01-05T07:01:49.644Z",
 *    "createdAt": "2021-01-05T07:01:49.644Z",
 *    "deletedAt": null
    }
}
 *
 * @apiSuccess {Object} Booking Booking object after updation
 *
 *@apiErrorExample Response Body:
 *{
 * "message":"access denied"
 *}
 *@apiError {String} Authorization authorization is missing or invalid
 *@apiErrorExample Response Body:
 *{
 * "data":"id params is required"
 *}
 *@apiError {Number} id params id must be required
 *@apiErrorExample Response Body:
 *{
 * "data":"Booking with this id not found"
 *}
 *@apiError {Number} id params id is invalid
 */
router.put('/update/:id', validate('Booking'), bookingMethods.update);
/**
 * @api {delete} api/Booking/delete/:id delete Booking by id
 * @apiName delete
 * @apiGroup Booking
 *@apiVersion 0.1.0
 * @apiHeader (Header) {String} authorization Authorization Bearer token
 * @apiParam (Params) {Number} id Booking id is required
 *@apiSuccessExample Response Body
 *{
 *  "data":"Booking Deleted Successfully."
 *}
 *
 * @apiSuccess {String} message Message after successful deletion
 *
 *@apiErrorExample Response Body:
 *{
 * "message":"access denied"
 *}
 *@apiError {String} Authorization authorization is missing or invalid
 *@apiErrorExample Response Body:
 *{
 * "error":"id params is required"
 *}
 *@apiError {Number} id params id must be required
 *@apiErrorExample Response Body:
 *{
 * "error":"Booking with this id not found"
 *}
 *@apiError {Number} id params id is invalid
 */

router.delete('/delete/:id', bookingMethods.deleteBooking);

module.exports = router;
