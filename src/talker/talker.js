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

router.get('/:id', async (req, res) => {
        const talkers = await readTalker();
        const talker = talkers.find(({ id }) => id === Number(req.params.id));
        if (!talker) {
            res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
        }
        res.status(200).json(talker);
});

module.exports = router;
