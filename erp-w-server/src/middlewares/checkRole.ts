import Jwt from 'jsonwebtoken';
import { ExtractJwt } from 'passport-jwt';
import jwtDecode from 'jwt-decode';
import { User , IUser} from '../models/user.model';
var mongoose = require('mongoose');




//verify token

/*const jwt = Jwt;
function auth(req, res, next) {
  const token = req.header('auth-token');
  if (!token) return res.status(401).send('Access denied');

  try {
    const verified = jwt.verify(token, JSON.stringify(process.env.TOKEN_SECRET));
    req.user = verified;
  } catch (err) {
    res.status(400).send('Invalid Token');
  }
  next();
}
*/
//
const authPage = (Permissions) => {
  return async (req, res, next) => {
   const user = req.user as IUser;
    const userRole = 'admin';
    if (Permissions.includes(user?.role)) {
      next();
    } else {
      return res.status(401).send('access denied');
    }
  };
};
export { authPage };
