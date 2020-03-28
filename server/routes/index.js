var express = require('express');
var router = express.Router();
const FirstController = require('../controllers/FirstController');
const UserController = require('../controllers/UserController');
/* GET home page. */

router.get('/', FirstController.iswork);
router.post('/jeden', UserController.iswork)
module.exports = router;
