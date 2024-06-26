const express = require('express');
const router = express.Router();

const {login,logout,google} = require('../controller/main.js');

router.route('/login').get(login);
router.route('/logout').get(logout);
router.route('/google').get(google);

module.exports = router;