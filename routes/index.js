const express = require('express');
const router = express.Router();
const usersRouter = require('./users');

// Define routes for the entire application
router.use('/users', usersRouter);

module.exports = router;
