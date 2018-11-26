const express = require('express');
const router = express.Router();


router.use('/', require('./home'));
router.use('/auth', require('./auth'));
router.use('/meal', require('./meal'));
router.use('/recipe', require('./recipe'));

module.exports = router;
