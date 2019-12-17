const fs = require('fs');

const a = (path: string) => fs.readFileSync(path, 'UTF-8'); // .toString().split("\n");

module.exports = {
    fileByLine: a
};
