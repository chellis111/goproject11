// Require the file system module
const fs = require('fs');

// Create a file named 'welcome.txt' and write 'Hello Node' in it
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) throw err;
  console.log('File has been created and saved.');
});

// Read the file 'hello.txt'
fs.readFile('hello.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data); // Logs the content of the file
});
