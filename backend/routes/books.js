const express = require('express');
const router = express.Router();
const controller = require('../controllers/bookController');

router.get('/', controller.getBooks);
router.post('/add', controller.addBook);

module.exports = router;

