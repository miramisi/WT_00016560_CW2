const express = require('express');
const router = express.Router();
const usersController = require('./users');

// Define routes for users
router.use('/users', usersController);

module.exports = router;