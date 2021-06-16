const Router = require('express');
const { body } = require('express-validator');
const cars = require('../controllers/car.controller');
const getCar = require('../controllers/car.controller');
const saveCar = require('../controllers/car.controller');
const update = require('../controllers/car.controller');
const deleteCar = require('../controllers/car.controller');

const validate = (method) => {
  if (method !== 'Car') return [body('parameters').isEmpty()];

  return [body('name').notEmpty(), body('description').notEmpty(), body('plateNumber').isInt().notEmpty()];
};
const router = Router();

/**
 * @api {get} api/car/list show all cars
 * @apiName list
 * @apiGroup Car
 *@apiVersion 0.1.0
 * @apiHeader (Header) {String} authorization Authorization Bearer token
 *
 *@apiSuccessExample Response Body
 *[{
 *     "id": 1,
 *     "name": "bmw",
 *     "description": "anything"
 *     "plateNumber": "12wr",
 *    "updatedAt": "2021-01-05T07:01:49.644Z",
 *    "createdAt": "2021-01-05T07:01:49.644Z",
 *    "deletedAt": null  }]
 *
 * @apiSuccess {Objects[]} Cars Array of Cars
 *
 *@apiErrorExample Response Body:
 *{
 * "message":"access denied"
 *}
 *@apiError {String} Authorization authorization is missing or invalid
 */
router.get('/list', cars);
/**
 * @api {get} api/car/:id show car by Id
 * @apiName getCar
 * @apiGroup Car
 *@apiVersion 0.1.0
 * @apiHeader (Header) {String} authorization Authorization Bearer token
 * @apiParam (Params) {Number} id car id is required
 *@apiSuccessExample Response body
 *{
 *  "data": {
 *   "id": 1,
 *     "name": "bmw",
 *     "description": "anything"
 *     "plateNumber": "12wr",
 *    "updatedAt": "2021-01-05T07:01:49.644Z",
 *    "createdAt": "2021-01-05T07:01:49.644Z",
 *    "deletedAt": null
 *  }
 *}
 *
 * @apiSuccess {Objects}  Object of Car
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
 * "error":"Car with this id not found"
 *}
 *@apiError {Number} id params id is invalid
 */

router.get('/:id', getCar);
/**
 * @api {post} api/car/create create car
 * @apiName create
 * @apiGroup Car
 *@apiVersion 0.1.0
 * @apiHeader (Header) {String} authorization Authorization Bearer token
 * @apiParam {String} name  name for car
 * @apiParam {String} description fdescription for car
 * @apiParam {string} plateNumber plate number of car
 *
 *@apiParamExample Request Body:
 *{
 * "name":"bmw",
 * "description":"car description",
 * "plateNumber":"ww-2",
 *}
 *
 * @apiSuccess {Number} id Car Id
 * @apiSuccess {String} name name of car
 * @apiSuccess {String}  description description of car
 * @apiSuccess {String} plateNumber plate number of car
 *@apiSuccessExample Response body
 *{
 *  "data": {
 *     "id": 5,
 *    "name": "bmw",
 *    "description": "car description",
 *    "plateNumber": "ww-2",
 *    "updatedAt": "2021-01-05T07:01:49.644Z",
 *    "createdAt": "2021-01-05T07:01:49.644Z",
 *    "deletedAt": null
 *  }
 *}
 *
 *@apiErrorExample Response Body:
 *{
 * "name":"Naame field is is required",
 * "description":"description field is required"
 *}
 *
 * @apiError {String} car sample
 *@apiErrorExample Response Body:
 *{
 * "message":"access denied"
 *}
 *@apiError {String} Authorization authorization is missing or invalid
 */
router.post('/create', validate('Car'), saveCar);
/**
 * @api {put} api/car/update/:id update Car
 * @apiName update
 * @apiGroup Car
 *@apiVersion 0.1.0
 * @apiHeader (Header) {String} authorization Authorization Bearer token
 *
 * @apiParam {String} name  name of car
 * @apiParam {String} description description of car
 * @apiParam {String} plateNumber  number plate of car
 *@apiParamExample Request Body:
 *{
 * "name":"name",
 * "description":"description",
 * "plateNumber":"ww-2"
 *}
 *@apiSuccessExample Response Body
 *{
 *  "data": {
 *     "id": 5,
 *     "name": "name",
 *    "description": "description",
 *    "plateNumber": 1,
 *    "updatedAt": "2021-01-05T07:01:49.644Z",
 *    "createdAt": "2021-01-05T07:01:49.644Z",
 *    "deletedAt": null
    }
}
 *
 * @apiSuccess {Object} Car object after updation
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
 * "data":"Car with this id not found"
 *}
 *@apiError {Number} id params id is invalid
 */
router.put('/update/:id', validate('car'), update);
/**
 * @api {delete} api/car/delete/:id delete car by id
 * @apiName delete
 * @apiGroup Car
 *@apiVersion 0.1.0
 * @apiHeader (Header) {String} authorization Authorization Bearer token
 * @apiParam (Params) {Number} id car id is required
 *@apiSuccessExample Response Body
 *{
 *  "data":"car Deleted Successfully."
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
 * "error":"car with this id not found"
 *}
 *@apiError {Number} id params id is invalid
 */

router.delete('/delete/:id', deleteCar);

module.exports = router;
