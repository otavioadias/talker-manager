const express = require('express');
const { readTalker, getLastTalkerId, insertTalker, 
    changeTalkerFile, deleteTalker, findTalker } = require('../utils/readAndWriteFiles');
const ageValidation = require('../middleware/age');
const nameValidation = require('../middleware/name');
const talkValidation = require('../middleware/talk');
const tokenValidation = require('../middleware/token');
const rateValidation = require('../middleware/rate');
const watchedAtValidation = require('../middleware/watchedAt');

const router = express.Router();

router.get('/search', tokenValidation, async (req, res) => {
    const { q } = req.query;
    const talker = await findTalker(q);
    return res.status(200).json(talker);
});

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

router.post('/', tokenValidation, nameValidation, ageValidation,
    talkValidation, watchedAtValidation, rateValidation,
    async (req, res) => {
        try {
            const { name, age, talk } = req.body;
            const id = await getLastTalkerId() + 1;
            const newTalker = {
                id,
                name,
                age,
                talk,
            };
            await insertTalker(newTalker);
            return res.status(201).json(newTalker);
        } catch (e) {
            console.log(e);
        }
});

router.put('/:id', tokenValidation, nameValidation, ageValidation,
    talkValidation, watchedAtValidation, rateValidation,
    async (req, res) => {
        const { name, age, talk } = req.body;
        const { id } = req.params;
        const newTalker = {
            name,
            age,
            id: Number(id),
            talk,
        };
        await changeTalkerFile(newTalker, id);
        return res.status(200).json(newTalker);
});

router.delete('/:id', tokenValidation, async (req, res) => {
    const { id } = req.params;
    await deleteTalker(id);
    return res.sendStatus(204);
});

module.exports = router;
