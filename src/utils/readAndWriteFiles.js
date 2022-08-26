const fs = require('fs/promises');
const { join } = require('path');

const readTalker = async () => {
    try {
        const arrayTalker = await fs.readFile(join(__dirname, '../talker.json'), 'utf8');
        return JSON.parse(arrayTalker);
    } catch (e) {
        console.log(e.message);
    }
};

module.exports = readTalker;
