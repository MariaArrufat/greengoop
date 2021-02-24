var express = require('express');
var router = express.Router();

var users = [
  { name: 'maria', age:25 },
  { name: 'tyson', age:27 }
]

/* GET users listing. */
router.get('/', function(req, res, next) {
  if (req.query.name) {
    return res.send(users.find(user => user.name == req.query.name))
  }
  res.send(users);
});

router.get('/:userId', function(req, res, next) {
  const user = users[req.params.userId]
  if (user) res.send(user)
  else res.sendStatus(404) // else next(new Error('User not found'))
})

module.exports = router;
