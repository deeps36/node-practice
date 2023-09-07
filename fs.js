const fs = require('fs');

// const a = fs.readFileSync('file.txt')
// console.log(a.toString())

// fs.readFile('file.txt','utf8', (err, data) => {
//     console.log(err, data)
// })


fs.writeFile('file1.txt', "this is data",() => {
        console.log("written to the file")
    })
    
console.log("Finish reading file");