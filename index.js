// use path module
// __dirname, __filename
const path = require('path');
console.log(__dirname);
console.log(__filename);

// basename
console.log(path.basename(__filename));

// extname
console.log(path.extname(__filename));

// join
console.log(path.join(__filename,'test',"index.html"));

// parse
console.log(path.parse(__filename));

// format
// console.log(path.format(__filename));

// dirname
console.log(path.dirname(__filename));

