const fs = require("fs");

const readable = fs.createReadStream("input.txt", "utf8");
const writable = fs.createWriteStream("output.txt");

readable.pipe(writable);

readable.on("end", () => {
  console.log("File copied successfully using pipe.");
});

readable.on("error", (err) => {
  console.error("Error reading file:", err);
});

writable.on("error", (err) => {
  console.error("Error writing file:", err);
});
