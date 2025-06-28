const fs = require("fs")

// 1. Create a file named welcome.txt with content "Hello Node"
// fs.writeFileSync("welcome.txt","Hello Node",(err,data)=>{
//     if (err) throw err

//     console.log(data);
// })
// console.log("program ended");



  // 2. Read from welcome.txt and log content
fs.readFileSync("welcome.txt","utf8",(err,data)=>{
    if (err) throw err

    console.log("File content:",data);
})
// console.log("programme ended");
