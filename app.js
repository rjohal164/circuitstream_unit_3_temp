// Imports at the top of your file
const { log } = require("console");
const path = require("path");

const filePath = "/users/test/file.txt";

console.log(`Dirname: ${path.dirname(filePath)}`);
console.log(`Basename: ${path.basename(filePath)}`);
console.log(`Extension: ${path.extname(filePath)}`);

const fullPath = path.join("user", "test", "text.md");
console.log(`FullPath: ${fullPath}`);
