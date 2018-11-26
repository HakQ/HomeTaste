const express = require('express');
const router = express.Router();


router.use('/', require('./home'));
router.use('/auth', require('./auth'));
router.use('/meal', require('./meal'));


module.exports = router;
