const fs = require("fs");

const filePath = "data.txt";

fs.access(filePath, fs.constants.F_OK, (err) => {
  if (err) {
    console.error("Error: File does not exist!");
    return;
  }

  const readable = fs.createReadStream(filePath, "utf8");

  readable.on("data", (words) => {
    console.log("received:", words);
  });

  readable.on("end", () => {
    console.log("Finished reading file.");
  });

  readable.on("error", (err) => {
    console.error("Error reading file:", err);
  });
});
