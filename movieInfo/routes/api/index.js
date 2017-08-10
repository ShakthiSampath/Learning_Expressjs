var router = require('express').Router();

router.use('/', require('./greeting'));
router.use('/movies', require('./addMovie'));
router.use('/movies/:movieID', require('./readMovie'));
router.use('/movies/:movieID', require('./editMovie'));
router.use('/movies/:movieID', require('./deleteMovie'));

module.exports = router;