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


// const express = require('express');
// const handlebar = require('express-handlebars');
// const bodyParser = require('body-parser');

// const fileController = require('./fileController');


// let app = express();
// app.use(bodyParser.urlencoded({extended: false}));

// app.engine('handlebars',handlebar({defaultLayout: 'main'}));
// app.set('view engine', 'handlebars');

// app.get('/', (req, res)=>{
//     res.render('home', {
//         number: {
//             a:Math.random()*2001-1000
//         },
//         htmlData: '<h2>Render HTML</h2>'
//     });
// })

// app.get('/ask', (req, res)=>{
//      res.render('ask')
// })

// app.post('/ask', (req, res)=>{
//     console.log(req.body);
//     try {
//         let data = [...fileController.readFileSync('./data.json')];
//         let id = data.length + 1;
//         let newQuestion = {
//         id: id,
//         question: req.body.question
//     };
//     data.push(newQuestion);
//     fileController.writeFile('./data.json', data, (err)=>{
//         if(err) {console.log(err)}
//         res.redirect('/question/' + id);
//     });
//     } catch (error) {
//         console.log(error);
//     }

// });

// app.get('/question/:id', (req, res)=> {
//     try {
//         let data = [...fileController.readFileSync('./data.json')];
//         let question = data[req.params.id-1];
//         res.render('question', {
//             question: question.question
//         })
//     } catch (error) {
//         console.log(error);
//     }
// })


// app.get('/frontendPractice', (req, res)=>{
//     res.sendFile(__dirname + '/public/b1.html')
// })

// app.get('/flexBox', (req, res)=>{
//     res.sendFile(__dirname + '/public/b3.html')
// })

// app.get('/about', (req, res)=>{
//     res.send("This is about");
// })

const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Controller = require('./fileController');
const askRouter = require('./router/askRouter');
const questionRouter = require('./router/questionRouter');
const voteRouter = require('./router/voteRouter');
const fs = require('fs');

let app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.engine('handlebars',handlebars({defaultLayout: 'main'}));
app.set('view engine','handlebars');

var data = [...Controller.readFileSync('data.json')];

app.use('/',questionRouter);
app.use('/ask',askRouter);
app.use('/question',questionRouter);
app.use('/vote',voteRouter);

app.use(express.static("public"));
app.listen(1810, (err) => {
    if(err){ console.log(err); }
    console.log("App is start at port 1810");
})