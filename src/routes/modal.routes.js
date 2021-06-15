import { Router } from 'express';
import { body } from 'express-validator';

import { Modals, getModal, saveModal, update, deleteModal } from '../controllers/modal.controller';

const router = Router();

const validate = (method) => {
  if (method !== 'Modal') return [body('parameters').isEmpty()];

  return [body('name').notEmpty(), body('description').notEmpty()];
};
/**
 * @api {get} /modal/get show all modals
 * @apiName get
 * @apiGroup MOdal
 *@apiVersion 0.1.0
 * @apiHeader (Header) {String} authorization Authorization Bearer token
 *
 *@apiSuccessExample Response Body
 *[{
 *     "id": 1,
 *     "name": "model 1",
 *     "description": "description"
 *    "updatedAt": "2021-01-05T07:01:49.644Z",
 *    "createdAt": "2021-01-05T07:01:49.644Z",
 *    "deletedAt": null  }]
 *
 * @apiSuccess {Objects[]} Modals Array of Modals
 *
 *@apiErrorExample Response Body:
 *{
 * "message":"access denied"
 *}
 *@apiError {String} Authorization authorization is missing or invalid
 */

router.get('/get', Modals);
/**
 * @api {get} /modal/:id show modal by Id
 * @apiName getModal
 * @apiGroup Modal
 *@apiVersion 0.1.0
 * @apiHeader (Header) {String} authorization Authorization Bearer token
 * @apiParam (Params) {Number} id modal id is required
 *@apiSuccessExample Response body
 *{
 *  "data": {
 *     "id": 5,
 *     "name": 4,
 *    "description": "modal 1",
 *    "updatedAt": "2021-01-05T07:01:49.644Z",
 *    "createdAt": "2021-01-05T07:01:49.644Z",
 *    "deletedAt": null
 *  }
 *}
 *
 * @apiSuccess {Objects}  Object of Modal
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
 * "error":"Modal with this id not found"
 *}
 *@apiError {Number} id params id is invalid
 */

router.get('/:id', getModal);
/**
 * @api {post} /modal/create create modal
 * @apiName createEvent
 * @apiGroup Modal
 *@apiVersion 0.1.0
 * @apiHeader (Header) {String} authorization Authorization Bearer token
 *
 * @apiParam {Number} carId
 *
 *@apiParamExample Request Body:
 *{
 * "name":"4",
 * "description":1,
 *}
 *
 * @apiSuccess {String} name of modal
 * @apiSuccess {String} description of modal
 *@apiSuccessExample Response body
 *{
 *  "data": {
 *     "id": 5,
 *    "name": 4,
 *    "description": 1,
 *    "updatedAt": "2021-01-05T07:01:49.644Z",
 *    "createdAt": "2021-01-05T07:01:49.644Z",
 *    "deletedAt": null
 *  }
 *}
 *
 *@apiErrorExample Response Body:
 *{
 * "name":"name field is required",
 * "description":"description field is required"
 *}
 *
 * @apiError {String} Modal
 *@apiErrorExample Response Body:
 *{
 * "message":"access denied"
 *}
 *@apiError {String} Authorization authorization is missing or invalid
 */
router.post('/create', validate('Modal'), saveModal);
/**
 * @api {put} /modal/update/:id update MOdal
 * @apiName update
 * @apiGroup Modal
 *@apiVersion 0.1.0
 * @apiHeader (Header) {String} authorization Authorization Bearer token
 *
 * @apiParam {String} name of modal
 * @apiParam {String} description Description of the modal
 *@apiParamExample Request Body:
 *{
 * "name":"name",
 * "description":"description",
 *}
 *@apiSuccessExample Response Body
 *{
 *  "data": {
 *     "id": 5,
 *     "name": "name  of the modal",
 *    "description": "description of the modal",
 *    "updatedAt": "2021-01-05T07:01:49.644Z",
 *    "createdAt": "2021-01-05T07:01:49.644Z",
 *    "deletedAt": null
    }
}
 *
 * @apiSuccess {Object} Modal object after updation
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
 * "data":"Modal with this id not found"
 *}
 *@apiError {Number} id params id is invalid
 */
router.put('/update/:id', validate('Modal'), update);
/**
 * @api {delete} /modal/delete/:id delete modal by id
 * @apiName delete
 * @apiGroup Modal
 *@apiVersion 0.1.0
 * @apiHeader (Header) {String} authorization Authorization Bearer token
 * @apiParam (Params) {Number} id Modal id is required
 *@apiSuccessExample Response Body
 *{
 *  "data":"Modal Deleted Successfully."
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

router.delete('/delete/:id', deleteModal);

export default router;
