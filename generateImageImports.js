const fs = require('fs');
const path = require('path');

const imagesDir = './images';
const outputFile = './images/index.js';

const files = fs.readdirSync(imagesDir);

// モジュールのimport文を生成
const imported = files.map(file => `const ${file.split('.')[0]} = require('./${file}');`);

// モジュールのexport文を生成
const exported = `module.exports = { ${files.map(file => file.split('.')[0]).join(', ')} };`;

// 生成したimport文とexport文を結合してファイルに書き込む
const content = `${imported.join('\n')}\n\n${exported}\n`;

fs.writeFileSync(outputFile, content);
