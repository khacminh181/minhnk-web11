// const fs = require('fs');

// //fs.readFile

// let dataFromFile = fs.readFileSync('./package.json',{ encoding: 'utf-8'});
// console.log(dataFromFile);

// fs.readFile('./package.json', 'utf-8', (error, data)=> {
//     if(error) {
//         console.log(error);
//     }
//     console.log(data);
// })

// let dataWriteFile = "Hello, it's write file!";

// let dataObjectWriteFile = {
//     a: 5,
//     b: 6
// }

// fs.writeFile('text.txt', JSON.stringify(dataObjectWriteFile), 'utf-8', (err)=>{
//     if (err) {
//         console.log(err);
//     }
//     console.log("Write file succes!");
// })

// fs.readFile('text.txt', 'utf-8', (error,data)=>{
//     if(error) {
//         console.log(error);
//     }
//     console.log("Data:" + JSON.parse(data).a);
// })

// fs.readFile('text.txt', 'utf-8', (error,data)=>{
//     if(error) {
//         console.log(error);
//     }
//     let objectData = JSON.parse(data);
//     console.log(objectData[Object.keys(objectData)[0]]);
// })

// let fs = require('./fileController');

// console.log(fs);

// let data = fs.readFile('text.txt',(fileData) => {
//     console.log(data);
// });


const express = require('express');

let app = express();
app.use(express.static("public"));


app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/public/1.html')
})

app.get('/frontendPractice', (req, res)=>{
    res.sendFile(__dirname + '/public/b1.html')
})

app.get('/flexBox', (req, res)=>{
    res.sendFile(__dirname + '/public/b3.html')
})

app.get('/about', (req, res)=>{
    res.send("This is about");
})

app.listen(1810, (err) => {
    if(err){ console.log(err); }
    console.log("App is start at port 1810");
})