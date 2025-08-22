const fs = require("fs");

fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) {
    if (err.code === "ENOENT") {
      console.error("Error: File not found!");
    } else {
      console.error("Error reading file:", err);
    }
    return;
  }
  console.log("File contents:", data);
});
