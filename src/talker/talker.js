const express = require('express');
const readTalker = require('../utils/readAndWriteFiles');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const talkers = await readTalker();
        return res.status(200).json(talkers);
    } catch (err) {
        return res.status(200).json([]);
    }
});

module.exports = router;
