const express = require('express');
const router = express.Router();


router.use('/', require('./home'));
<<<<<<< HEAD
router.use('/auth', require('./auth'));
router.use('/meal', require('./meal'));
router.use('/recipe', require('./recipe'));
=======
router.use('/', require('./auth'));
router.use('/', require('./recipes'));

>>>>>>> 52225259e60746a1fa75e7892b509cac6f7b637b

module.exports = router;
