const fs = require('fs');

export const fileByLine = (path: string): string[] => fs.readFileSync(path, 'UTF-8').split("\n");
