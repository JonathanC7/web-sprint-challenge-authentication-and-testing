const router = require('express').Router();
const bcrypt = require('bcryptjs');
const Users = require('../users/users-model.js');
const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets.js');

router.post('/register', async (req, res) => {
  // implement registration
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;

  try{
    const saved = await Users.add(user);
    res.status(201).json(saved);
  } catch(err){
    res.status(500).json({message: 'May not register', error: err});
  }
});

router.post('/login', async (req, res) => {
  // implement login
  let {username, password} = req.body;

  try{
    const user = await Users.findBy({username}).first();
    if(user && bcrypt.compareSync(password, user.password)){
      const token = generateToken(user);
      req.session.user = user;
      res.status(200).json({message: `Welcome ${username}`, token})
    } else {
      res.status(401).json({message: 'You shall not pass (invalid token)'})
    } 
  } catch(error){
    console.log(error);
    res.status(500).json(error);
  }
});

function generateToken (user){
  const payload = {
    subject: user.id,
    username: user.username
  };
  const secret = secrets.jwtSecret;

  const options = {
    expiresIn: '1h'
  };

  return jwt.sign(payload, secret, options);
}

module.exports = router;
