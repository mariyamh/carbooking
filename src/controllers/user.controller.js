import { hash, compare } from 'bcrypt';

import jwt from 'jsonwebtoken';
import { User } from '../models';

import defaultResponse from '../utils/defaultResponse';
import constants from '../utils/constants';
import responseStatus from '../utils/responseStatus';

export const register = async (req, res) => {
  try {
    req.body.password = await hash(req.body.password, 10);
    const user = await User.create(req.body);

    if (user) {
      defaultResponse.success(constants.DATA_SAVED, user, res, responseStatus.SUCCESS);
    }
  } catch (err) {
    defaultResponse.error({ message: err.message }, res, responseStatus.ERROR);
  }
};

export const login = async (req, res) => {
  try {
    const user = await User.findOne({ where: { email: req.body.email } });
    if (user == null) {
      defaultResponse.error({ message: constants.USER_NOTFOUND }, res, responseStatus.ERROR);
    }
    if (await compare(req.body.password, user.password)) {
      const loggedUser = {
        id: user.id,
        name: user.name,
        email: user.email,
      };
      const token = jwt.sign(loggedUser, process.env.TOKEN_SECRET);
      defaultResponse.success(constants.USER_LOGGEDIN, user, res, responseStatus.SUCCESS, token);
    }
  } catch (err) {
    defaultResponse.error({ message: err.message }, res, responseStatus.ERROR);
  }
};

export const allUsers = async (_req, res) => {
  try {
    const users = await User.findAll();
    if (users) {
      defaultResponse.success(constants.DATA_RETRIEVED, users, res, responseStatus.SUCCESS);
    }
  } catch (err) {
    defaultResponse.error({ message: err.message }, res, responseStatus.ERROR);
  }
};
