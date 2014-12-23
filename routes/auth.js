var express = require('express');
var router = express.Router();

router.get('/login', function(req, res) {
  res.render('auth/login', { title: 'Cheese' });
});

module.exports = router;
