
const fs = require("fs");
const path = require("path")
const process = require('process');


const args = process.argv

const temPath = "./source-6th" + args[2]
console.log(args)



if (!fs.existsSync(temPath)) {
    fs.mkdir(temPath, () => {
        console.log('create dir success')
    })
}

fs.writeFileSync(temPath + "/solution.md", "");
fs.writeFileSync(temPath + "/index.js", "");



process.exit(0);
