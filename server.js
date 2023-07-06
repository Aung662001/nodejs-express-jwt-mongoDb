const fs = require("fs");
const path = require("path");

const rs = fs.createReadStream(path.join(__dirname, "files", "lorem.txt"), {
  encoding: "utf-8",
});
const ws = fs.createWriteStream(path.join(__dirname, "files", "newLorem.txt"));

rs.on("data", (chunk) => {
  ws.write(chunk);
});
process.on("uncaughtException", (err) => {
  console.error(`There is an uncaught error`, err);
  process.exit(1);
});
