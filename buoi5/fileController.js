const fs = require('fs');

// let readFile = (path) => {
//     return fs.readFileSync(path, 'utf-8');
// }

let readFile = (path, onReadFileDone) => {
    fs.readFile(path, 'utf-8', (err, data) => {
        if(err) {
            console.log(err);
        }
        onReadFileDone(data);
    })
}

let readFileSync = (path) => {
    return JSON.parse(fs.readFileSync(path, 'utf-8'));
}

let writeFile = (path, writedata, onWriteDataSuccess) => {
    fs.writeFile(path,JSON.stringify(writedata), onWriteDataSuccess);
}


module.exports = {
    readFile,
    writeFile,
    readFileSync
}
