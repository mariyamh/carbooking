const jwt = require('jsonwebtoken');
const defaultResponse = require('./defaultResponse');
const constants = require('./constants');
const responseStatus = require('./responseStatus');

module.exports = (req, res, next) => {
  const getToken = req.header('Authorization');
  if (!getToken) {
    defaultResponse.error({ message: constants.NO_TOKEN }, res, responseStatus.NO_TOKEN);
  }
  try {
    req.user = jwt.verify(getToken, process.env.TOKEN_SECRET);
    next();
  } catch (error) {
    defaultResponse.error({ message: constants.TOKEN_ERROR }, res, responseStatus.NO_TOKEN);
  }
};
