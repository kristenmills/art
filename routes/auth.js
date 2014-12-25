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
    if(officers.indexOf(req.body.username) === -1) {
      res.json({ notice: 'Insufficient Privleges'});
    }
    var username = req.body.username.toLowerCase() + '@ad.sofse.org';
    var password = req.body.password;

    var client = ldap.createClient({
      url: 'ldap://dc1.ad.sofse.org:389',
    });


    client.bind(
      username,
      password,
      function(err){
        if(err) {
          res.json({ notice: 'Insufficient Privleges'});
        }
        req.session.user = username;
        res.json({ notice: 'Successfully Logged In'})
      }
    );
  }
});

module.exports = router;
