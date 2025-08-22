const fs = require("fs");

const writable = fs.createWriteStream("output.txt");

writable.write("Hello, Node.js!");
writable.end();

writable.on("finish", () => {
  console.log("Data successfully written to output.txt");
});

writable.on("error", (err) => {
  console.error("Error writing to file:", err);
});
