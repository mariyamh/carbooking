const { hash, compare } = require('bcrypt');
const jwt = require('jsonwebtoken');
const defaultResponse = require('../utils/defaultResponse');
const constants = require('../utils/errors');
const responseStatus = require('../utils/responseStatus');

const models = require('../models');

const { User } = models;

const register = async (req, res) => {
  try {
    req.body.password = await hash(req.body.password, 10);

    const user = await User.create(req.body);
    if (user) {
      defaultResponse.success(constants.DATA_SAVED, { user }, res, responseStatus.SUCCESS);
    }
  } catch (err) {
    defaultResponse.error({ message: err.message }, res, responseStatus.ERROR);
  }
};
const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email }, (err, doc) => {
      if (err) {
        defaultResponse.error({ message: err }, responseStatus.ERROR);
      }
    });

    if (user == null) {
      defaultResponse.error({ message: constants.USER_NOTFOUND }, res, responseStatus.ERROR);
    }
    if (await compare(req.body.password, user.password)) {
      const loggedUser = {
        id: user.id,
        name: user.name,
        email: user.email,
      };
      const token = jwt.sign(loggedUser, process.env.TOKEN_SECRET, { expiresIn: '15d' });
      defaultResponse.success(constants.USER_LOGGEDIN, user, res, responseStatus.SUCCESS, token);
    }
  } catch (err) {
    defaultResponse.error({ message: err.message }, res, responseStatus.ERROR);
  }
};

const allUsers = async (_req, res) => {
  try {
    const users = await User.find();
    if (users) {
      defaultResponse.success(constants.DATA_RETRIEVED, users, res, responseStatus.SUCCESS);
    }
  } catch (err) {
    defaultResponse.error({ message: err.message }, res, responseStatus.ERROR);
  }
};

const userFunctions = {
  register,
  login,
  allUsers,
};

module.exports = userFunctions;
