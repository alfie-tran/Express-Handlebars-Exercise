const express = require('express');
const router = express.Router();
const controller = require('../controllers/task2Controller');

// 1. tra ve trang task2 voi hinh default. => route: /task1
// 2. tra ve trang task2 voi hinh tuong ung voi tien do nguoi dung chon
//=> route: /task2
router.get('/', controller.showDefault);
router.post('/', controller.showJars);

module.exports = router;
