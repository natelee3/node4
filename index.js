const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("filename: ", (filename => {
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            console.error(err)
            return
        }
        console.log(data.toUpperCase())
    })
    rl.close();
}))
