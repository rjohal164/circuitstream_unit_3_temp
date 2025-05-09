// Imports at the top of your file
const path = require("path");
const fs = require("fs");

// Path Example
const filePath = "/users/test/file.txt";

console.log(`Dirname: ${path.dirname(filePath)}`);
console.log(`Basename: ${path.basename(filePath)}`);
console.log(`Extension: ${path.extname(filePath)}`);

const fullPath = path.join("user", "test", "text.md");
console.log(`FullPath: ${fullPath}`);

// FS Example
const filePathHello = path.join(__dirname, "hello.txt");
const helloContent = "Hello from Node.js";

try {
  fs.writeFileSync(filePathHello, helloContent);

  console.log(`Succesffuly wrote to ${filePathHello}`);
} catch (error) {
  console.error(`Error ${filePathHello}`);
}

// Reading Data
try {
  const data = fs.readFileSync(filePathHello);
  console.log(`data inside file: ${data}`);
} catch (error) {
  console.error(`Error reading file ${filePathHello}`);
}
