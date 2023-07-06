const fs = require("fs");
const path = require("path");

// const rs = fs.createReadStream(path.join(__dirname, "files", "lorem.txt"), {
//   encoding: "utf-8",
// });
// const ws = fs.createWriteStream(path.join(__dirname, "files", "newLorem.txt"));

if (!fs.existsSync("./new")) {
  fs.mkdir("./new", (err) => {
    if (err) throw err;
    console.log("Dirtory Created");
  });
} else {
  fs.rmdir("./new", (err) => {
    if (err) throw err;
    console.log("Diretory Deleted");
  });
}
// rs.pipe(ws);
process.on("uncaughtException", (err) => {
  console.error(`There is an uncaught error`, err);
  process.exit(1);
});
