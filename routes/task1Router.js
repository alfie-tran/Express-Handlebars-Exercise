const express = require('express');
const router = express.Router();
const controller = require('../controllers/task1Controller');

// 1. tra ve trang task1 voi hinh default. => route: /task1
// 2. tra ve trang task1 voi hinh tuong ung voi emotion do nguoi dung chon
//=> route: /task1?emotion=happy
router.get('/', controller.show);

module.exports = router;
