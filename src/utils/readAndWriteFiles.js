const fs = require('fs/promises');
const { join } = require('path');

const readTalker = async () => {
    try {
        const arrayTalker = await fs.readFile(join(__dirname, '../talker.json'), 'utf8');
        return JSON.parse(arrayTalker);
    } catch (e) {
        return [];
    }
};

const getLastTalkerId = async () => {
    const arrayTalker = await readTalker();
    return arrayTalker.length;
};

const insertTalker = async (talker) => {
    try {
        const arrayTalker = await readTalker();
        arrayTalker.push(talker);
        return await fs.writeFile(join(__dirname, '../talker.json'), JSON.stringify(arrayTalker));
    } catch (e) {
        return null;
    }
};

const changeTalkerFile = async (talker, id) => {
    try {
        const arrayTalker = await readTalker();
        let changedTalkers;
        for (let i = 0; i < arrayTalker.length; i += 1) {
            if (arrayTalker[i].id === Number(id)) {
                arrayTalker[i].name = talker.name;
                arrayTalker[i].age = talker.age;
                arrayTalker[i].talk = talker.talk;
                changedTalkers = arrayTalker[i];
            }
        }
        await fs.writeFile(join(__dirname, '../talker.json'), JSON.stringify(arrayTalker));
        return changedTalkers;
    } catch (e) {
        console.log(e);
        return null;
    }
};

module.exports = {
    readTalker,
    getLastTalkerId,
    insertTalker,
    changeTalkerFile,
};
