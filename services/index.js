const express = require('express');
const router = express.Router();
const usersService = require('./users');

// Define routes for services
router.use('/users', usersService);

module.exports = router;