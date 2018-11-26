const express = require('express');
const router = express.Router();


router.use('/', require('./home'));
router.use('/', require('./auth'));
router.use('/', require('./recipes'));


module.exports = router;
