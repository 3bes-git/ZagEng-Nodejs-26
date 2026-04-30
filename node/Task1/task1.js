const fs = require("node:fs");

//  --- A ---
//read file
//blocking - sync
console.log("First");
const fileContent = fs.readFileSync("data.txt", "utf-8");
console.log("content : ", fileContent);
console.log("Second");

//  --- B ---
//non-blocking
console.log("First");
const fileCon = fs.readFile("data_async.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Error404 : ", err);
  } else {
    console.log("content2 : ", data);
  }
});
console.log("Second");
