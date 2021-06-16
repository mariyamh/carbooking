const Router = require('express');
const body = require('express-validator');
const authToken = require('../utils/apiToken');
const login = require('../controllers/user.controller');
const register = require('../controllers/user.controller');
const allUsers = require('../controllers/user.controller');

const router = Router();

router.post('/register', [body('email').isEmail(), body('password').isLength({ min: 6 })], register);

/**
 * @api {post} /login Login User
 * @apiName LoginUser
 * @apiGroup User
 * @apiParam {String} email        Email of the User.
 * @apiParam {String} password     Password of the User.
 * @apiSuccess {String} error      True if there is some error, otherwise False.
 * @apiSuccess {String} message    Response Success Message.
 * @apiSuccess {data[]} data       Response data which includes User object.
 * @apiSuccess {string} token      Authentication Token
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 400 Bad Request
 *         {
 *             "error": true,
 *             "message": {
 *             "errors": [
 *               {
 *             "value": "1231",
 *             "msg": "Invalid value",
 *             "param": "password",
 *             "location": "body"
 *             }
 *        ]
 *    },
 *  "data": null
 * }
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "error": false,
 *       "message": "User is logged-in",
 *       "data": {
 *       "id": 36,
 *       "name": "testuser",
 *       "email": "testuser1234@test.com",
 *       "password": "$2b$10$1rBkiHgEkvMSRfEiPPfc9e0lOEJGdC/Un1xPSUrX3JlJ0D.FQTKKu",
 *       "updatedAt": "2021-01-05T06:41:41.230Z",
 *       "createdAt": "2021-01-05T06:41:41.230Z",
 *       "deletedAt": null
 *      },
 *      "token": "NDkzfQ.M_CjDmTYnVqhNd9c5bt7plrAZ_Iv4s0k5wkQJRbLlT4"
 *  }
 */
router.post('/login', [body('email').isEmail(), body('password').isLength({ min: 6 })], login);
/**
 * @api {get} /users All Users
 * @apiName AllUser
 * @apiGroup User
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "Authentication Token"
 *     }
 * @apiSuccess {String} error      True if there is some error, otherwise False.
 * @apiSuccess {String} message    Response Success Message.
 * @apiSuccess {data[]} data       Response data which includes Users object.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "error": false,
 *       "message": "Request completed and data retrieved.",
 *       "data": [
 *         {
 *           "id": 8,
 *           "name": "test12",
 *           "email": "test1test.com",
 *           "password": "$2b$10$lYnjHWdz6WZVCt0v76l.Z.T7kS5nlkPu0QLa64dID3Xlz5ZtQD0de",
 *           "createdAt": "2020-12-30T10:03:21.376Z",
 *           "updatedAt": "2020-12-30T10:03:21.376Z",
 *           "deletedAt": null
 *       },
 *       {
 *           "id": 9,
 *           "name": "test12",
 *           "email": "test1@test.com",
 *           "password": "$2b$10$K3RxHq2Tz0uDlupbfRiX0.1QKDmlLW2K.vJl.mZjABDb.sIDcjcLe",
 *           "createdAt": "2020-12-30T10:05:46.634Z",
 *           "updatedAt": "2020-12-30T10:05:46.634Z",
 *           "deletedAt": null
 *       },
 *       {
 *           "id": 12,
 *           "name": "test12",
 *           "email": "test221@test.com",
 *           "password": "$2b$10$pDZQeyZHzzAWtZyLd41Xo.kfaFOGxOYhUi2YqsCMSk0tPREBaRFi2",
 *           "createdAt": "2020-12-30T10:09:32.102Z",
 *           "updatedAt": "2020-12-30T10:09:32.102Z",
 *           "deletedAt": null
 *       },
 *    ]
 * }
 */
router.get('/users', allUsers);
router.get('/users', authToken, allUsers);
router.get('/users', authToken, allUsers);

module.exports = router;
