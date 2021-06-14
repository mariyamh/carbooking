/* eslint-disable no-unused-vars */
const express = require('express');

const mongoose = require('mongoose');

const users = require('../Models/user');

const userRouter = express.Router();

userRouter.all('/', (req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  next();
});

/**
    * @api {get} /users List All Users
    * @apiVersion 1.0.0
    * @apiName List
    * @apiGroup User
    * @apiPermission authenticated user
    *
    * @apiParam (Request body) {String} Nill
    *
    * @apiExample {js} Example usage:
    * $http.defaults.headers.common["Authorization"] = token;
    * $http.get(url, data)
    *   .success((res, status) => doSomethingHere())
    *   .error((err, status) => doSomethingHere());
    *
    * @apiSuccess (Success 201) {String} message !

    *
    * @apiSuccessExample {json} Success response:
    *     HTTPS 201 OK
    *     {
    *      "message": "All users Retruved!",
    *    }
    *
    * @apiUse UnauthorizedError
    */

userRouter.get('/', (req, res, next) => {
  res.end('Will send all the users to you!');
});

/**
 * @api {post} /users Create a user
 * @apiVersion 1.0.0
 * @apiName Create
 * @apiGroup User
 * @apiPermission authenticated user
 *
 * @apiParam (Request body) {String} name The user name
 *
 * @apiExample {js} Example usage:
 * const data = {
 *   "name": "Do the dishes"
 * }
 *
 * $http.defaults.headers.common["Authorization"] = token;
 * $http.post(url, data)
 *   .success((res, status) => doSomethingHere())
 *   .error((err, status) => doSomethingHere());
 *
 * @apiSuccess (Success 201) {String} message User saved successfully!
 * @apiSuccess (Success 201) {String} id The campaign id
 *
 * @apiSuccessExample {json} Success response:
 *     HTTPS 201 OK
 *     {
 *      "message": "User saved successfully!",
 *      "id": "57e903941ca43a5f0805ba5a"
 *    }
 *
 * @apiUse UnauthorizedError
 */

userRouter.post('/', (req, res, next) => {
  res.end(`Will add the user: ${req.body.name} with details: ${req.body.description}`);
});

userRouter.put('/', (req, res, next) => {
  res.statusCode = 403;
  res.end('PUT operation not supported on /users');
});
/**
 * @api {delete} /users/:id Delete a user
 * @apiVersion 1.0.0
 * @apiName Delete
 * @apiGroup User
 * @apiPermission authenticated user
 *
 * @apiParam {String} id The user id
 *
 * @apiExample {js} Example usage:
 * $http.defaults.headers.common["Authorization"] = token;
 * $http.delete(url)
 *   .success((res, status) => doSomethingHere())
 *   .error((err, status) => doSomethingHere());
 *
 * @apiSuccess {String} message user deleted successfully!
 *
 * @apiSuccessExample {json} Success response:
 *     HTTPS 200 OK
 *     {
 *      "message": "user deleted successfully!"
 *    }
 *
 * @apiUse UnauthorizedError
 */

userRouter.delete('/', (req, res, next) => {
  res.end('Deleting all users');
});

/**
 * @api {get} /users/:id Retrieve a user
 * @apiVersion 1.0.0
 * @apiName GetOne
 * @apiGroup User
 * @apiPermission authenticated user
 *
 * @apiParam {String} id The user id
 *
 * @apiExample {js} Example usage:
 * $http.defaults.headers.common["Authorization"] = token;
 * $http.get(url)
 *   .success((res, status) => doSomethingHere())
 *   .error((err, status) => doSomethingHere());
 *
 * @apiSuccess {String} _id The user id
 * @apiSuccess {String} name The user name
 *
 * @apiSuccessExample {json} Success response:
 *     HTTPS 200 OK
 *     {
 *        "_id": "57e8e94ea06a0c473bac50cc",
 *        "name": "test user",
 *        "__v": 0
 *      }
 *
 * @apiUse UnauthorizedError
 */

userRouter.get('/:userid', (req, res, next) => {
  res.status(200).json({
    message: `Will send details of the user: ${req.params.userId} to you!`,
    id: req.params.userId,
  });
});

userRouter.post('/:userId', (req, res, next) => {
  res.statusCode = 403;
  res.end(`POST operation not supported on /userss/${req.params.userId}`);
});
/**
 * @api {put} /users/:id Update a user
 * @apiVersion 1.0.0
 * @apiName Update
 * @apiGroup user
 * @apiPermission authenticated user
 *
 * @apiParam {String} id The user id
 *
 * @apiParam (Request body) {String} name The user name
 *
 * @apiExample {js} Example usage:
 * const data = {
 *   "name": "Run in the park"
 * }
 *
 * $http.defaults.headers.common["Authorization"] = token;
 * $http.put(url, data)
 *   .success((res, status) => doSomethingHere())
 *   .error((err, status) => doSomethingHere());
 *
 * @apiSuccess {String} message user updated successfully!
 *
 * @apiSuccessExample {json} Success response:
 *     HTTPS 200 OK
 *     {
 *      "message": "user updated successfully!"
 *    }
 *
 * @apiUse UnauthorizedError
 */
userRouter.put('/:userId', (req, res, next) => {
  res.write(`Updating the user: ${req.params.userId}\n`);
  res.end(`Will update the user: ${req.body.name} with details: ${req.body.description}`);
});

userRouter.delete('/:userId', (req, res, next) => {
  res.end(`Deleting user: ${req.params.userId}`);
});

module.exports = userRouter;
