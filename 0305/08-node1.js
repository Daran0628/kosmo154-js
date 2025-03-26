// console.log('hello world');

const { log } = require('console');
const fs = require('fs');
const input = fs.readFileSync(
    process.platform === "linux" ? 
    "/dev/stdin" : "./input.txt").toString().trim().split("\r\n");

var result = parseInt(input[0]) + parseInt(input[1]);
// console.log(result);

// console.log(input);
console.log(input[0]);
console.log(input[1].trim().split(" ")[0]);
console.log(input[1].trim().split(" ")[1]);
console.log(input[2]);
// console.log(input[0].split(" ")[0]);
// console.log(input);
// console.log(typeof input);

// split("\r\n")


