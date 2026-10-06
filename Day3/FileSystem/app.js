const fs = require("fs")

// Create File
fs.writeFile("test.txt", "hello Maharshi", (err)=>{
    console.log("Done")
})

// Read file
fs.readFile("test.txt", "utf-8", (err,data)=>{
    console.log(data)
})
console.log("ok");

// Update file
fs.appendFile("test.txt", "\nLearn NodeJs", (err)=>{
   console.log("lerning nodejs");
})

// Delete file
fs.unlink("test.txt", ()=>{
    console.log("file deleted");
})

console.log(process.argv);