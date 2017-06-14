const pug = require('pug');

const compileFunc = pug.compileFile(`${__dirname}/../views/static.pug`);

module.exports = compileFunc;