const fs = require("fs");
const path = require("path");

fs.readFile(
  path.join(__dirname, "files", "lorem.txt"),
  "utf-8",
  (error, data) => {
    if (error) throw error;
    console.log(data);
  }
);

fs.writeFile(
  path.join(__dirname, "files", "reply.txt"),
  "Hello , Nice to meet You!\n",
  (err) => {
    if (err) throw err;
    console.log("Write Success!");
    //
    fs.appendFile(
      path.join(__dirname, "files", "reply.txt"),
      "Nice to meet you too",
      (err) => {
        if (err) throw err;
        console.log("Append success");
      }
    );
    //
    fs.rename(
      path.join(__dirname, "files", "reply.txt"),
      path.join(__dirname, "files", "newReply.txt"),
      (err) => {
        if (err) throw err;
        console.log("Rename Complete");
        //
        fs.copyFile(
          path.join(__dirname, "files", "newReply.txt"),
          path.join(__dirname, "files", "a.txt"),
          (err) => {
            if (err) throw err;
            console.log("Copy Success");
            fs.unlink(path.join(__dirname, "files", "newReply.txt"));
          }
        );
      }

      //
    );
  }
);

process.on("uncaughtException", (err) => {
  console.error(`There is an uncaught error`, err);
  process.exit(1);
});
