const express = require('express');
const router  = express.Router();
const { ensureLoggedIn } = require('connect-ensure-login')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;
