import { Router } from 'express';
import { body } from 'express-validator';

import { Cars, getCar, saveCar, update, deleteCar } from '../controllers/car.controller';

const validate = (method) => {
  if (method !== 'Car') return [body('parameters').isEmpty()];

  return [body('name').notEmpty(), body('description').notEmpty(), body('plateNumber').isInt().notEmpty()];
};
const router = Router();

/**
 * @api {get} /car/get show all cars
 * @apiName get
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

router.get('/get', Cars);
/**
 * @api {get} /car/:id show car by Id
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
 * @api {post} /car/create create car
 * @apiName createEvent
 * @apiGroup Car
 *@apiVersion 0.1.0
 * @apiHeader (Header) {String} authorization Authorization Bearer token
 * @apiParam {String} name for car
 * @apiParam {String} description for car
 * @apiParam {string} plate number of car
 *
 *@apiParamExample Request Body:
 *{
 * "name":"bmw",
 * "description":"car description",
 * "plateNumber":"ww-2",
 *}
 *
 * @apiSuccess {Number} id Car Id
 * @apiSuccess {String} car name
 * @apiSuccess {String} car description
 * @apiSuccess {String} car plate number
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
 * @api {put} /car/update/:id update Car
 * @apiName update
 * @apiGroup Car
 *@apiVersion 0.1.0
 * @apiHeader (Header) {String} authorization Authorization Bearer token
 *
 * @apiParam {String} name of car
 * @apiParam {String} description of car
 * @apiParam {String} number plate of car
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
 * @api {delete} /car/delete/:id delete car by id
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

export default router;
