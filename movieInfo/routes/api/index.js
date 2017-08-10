var router = require('express').Router();

router.use('/', require('./greeting'));
router.use('/', require('./addMovie'));
router.use('/', require('./readMovie'));
router.use('/', require('./editMovie'));
router.use('/', require('./deleteMovie'));

module.exports = router;