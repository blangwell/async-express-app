const router = require('express').Router();
const asyncController = require('../controllers/async');

router.get('/new', asyncController.getNew);
router.post('/new', asyncController.postNew);
router.get('/update/:id', asyncController.getUpdate);
router.put('/update/:id', asyncController.putUpdate);
router.get('/:id', asyncController.getShow);

module.exports = router;