const express = require('express');
const generateToken = require('../utils/generateToken');
const emailValidation = require('../middleware/email');
const passwordValidation = require('../middleware/password');

const router = express.Router();

router.post('/', emailValidation, passwordValidation, (req, res) => {
    const tokenValue = generateToken();
    res.status(200).json({ token: tokenValue });
});

module.exports = router;