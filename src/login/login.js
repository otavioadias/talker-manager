const express = require('express');
const generateToken = require('../utils/generateToken');

const router = express.Router();

router.post('/', (req, res) => {
    // const { email, password } = req.body;
    const tokenValue = generateToken();
    res.status(200).json({ token: tokenValue });
});

module.exports = router;