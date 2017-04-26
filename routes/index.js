var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  var loginTestCollection = req.db.get('loginTest');
  loginTestCollection.find({},{})
    .then(function (data) {
      res.json(data);
    }).catch(function (err) {
      res.json(500, err);
    });
});

module.exports = router;
