/* 
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/
const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets.js');

module.exports = (req, res, next) => {
  const [authType, token] = req.headers.authorization.split(' ');
  console.log('token: ', token);
  if(token){
    jwt.verify(token, secrets.jwtSecret, (err, decodeToken) => {
      if(err){
          res.status(401).json({ you: 'shall not pass!' });
      } else {
        req.decodeJWT = decodeToken;
        next();
      }
    })
  } else {
    res.status(401).json({you: 'Do not have the power to enter. (make sure to include a token)'})
  }
};
