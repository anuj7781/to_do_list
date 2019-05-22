const express = require('express');
const router = express.Router();

const add_task = require('../controllers/add_task');

router.get('/',add_task.add);
module.exports = router;