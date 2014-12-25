var express = require('express');
var router = express.Router();
var ldap = require('ldapjs');

router.post('/auth', function(req, res){
  if(process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test' &&
    req.body.username === 'admin' &&
    req.body.password === 'admin' ) {

    req.session.user = 'admin';
  } else {
    var officers = ['president', 'vp', 'tresurer', 'secretary'];
    var username = req.body.username.toLowerCase();
    var user = username + '@ad.sofse.org';
    var password = req.body.password;

    if(officers.indexOf(username) === -1) {
      res.status(401).json({ notice: 'Insufficient Privleges'});
    }

    var client = ldap.createClient({
      url: 'ldap://dc1.ad.sofse.org:389',
    });

    client.bind(
      user,
      password,
      function(err){
        if(err) {
          res.status(401).json({ notice: 'Insufficient Privleges'});
        }
        req.session.user = username;
        res.json({ notice: 'Successfully Logged In'})
      }
    );
  }
});

router.get('/loggedIn', function(req, res) {
  if(req.session.user) {
    res.json({ loggedIn: true, user: req.session.user });
  } else {
    res.json({ loggedIn: false })
  }
});

router.post('/logout', function(req, res) {
  req.session.destroy();
  res.json({notice: "Successfully Logged Out"});
})

module.exports = router;
