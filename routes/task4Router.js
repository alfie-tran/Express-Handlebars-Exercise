const express = require('express');
const controller = require('../controllers/task4Controller');
const router = express.Router();

router.get('/', controller.showList);
router.get('/:name', controller.showDetails);

module.exports = router;
