// Import lodash as shown in Lesson 1
const _ = require("lodash");

// Section 1: Node.js Built-in Modules - path example
const path = require("path");

const myFilePath = "/users/test/documents/file.txt"; // Example path

// Get the directory name
console.log("Dirname:", path.dirname(myFilePath));
// Output: /users/test/documents

// Get the base filename
console.log("Basename:", path.basename(myFilePath));
// Output: file.txt

// Get the file extension
console.log("Extension:", path.extname(myFilePath));
// Output: .txt

// Join path segments together (OS-specific separator)
const fullPath = path.join("users", "test", "notes", "note.md");
console.log("Joined Path:", fullPath);
// Output: users/test/notes/note.md (or users\test\notes\note.md on Windows)

// Section 1: Node.js Built-in Modules - fs example
const fs = require("fs");

// --- Writing to a file (Synchronous) ---
const filePath = path.join(__dirname, "hello.txt"); // __dirname = current folder
const fileContent = "Hello from Node.js File System!";

try {
  fs.writeFileSync(filePath, fileContent, "utf8");
  console.log(`Successfully wrote to ${filePath}`);
} catch (err) {
  console.error("Error writing file:", err);
}

// --- Reading from a file (Synchronous) ---
try {
  const data = fs.readFileSync(filePath, "utf8");
  console.log(`Read from file: ${data}`);
} catch (err) {
  console.error("Error reading file:", err);
}

// Section 2: Creating Your Own Modules - using the logger module
const logger = require("./logger.js");

// Use the imported functions
logger.info("Application started.");

const user = "Alice";
if (!user) {
  logger.error("No user found!");
} else {
  logger.info(`User ${user} logged in.`);
}

// Use lodash for demonstration
const numbers = [1, 2, 3, 4, 5];
const sum = _.sum(numbers);
logger.info(`The sum of ${numbers} is ${sum}`);

// Using the math module from "Next Steps & Preview"
const math = require("./math.js");
console.log(`Addition: 5 + 3 = ${math.add(5, 3)}`);
console.log(`Subtraction: 10 - 4 = ${math.subtract(10, 4)}`);
