const fs = require('fs');
const input = fs.readFileSync(
    process.platform === "linux" ? 
    "/dev/stdin" : "./input.txt").toString().trim().split("\r\n");

    console.log(input);


