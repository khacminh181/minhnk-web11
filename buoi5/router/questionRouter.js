const express = require('express');
const router = express.Router();
const Controller = require('./Controller');


router.get('/',(req,res) => {
    let data = [...Controller.readFileSync('data.json')];
    if(data.length==0){
        res.redirect('/empty');
    }
    else{
        let id = Math.floor(Math.random()*(data.length));
        question = data[id].question;
        yes =  data[id].yes;
        no =  data[id].no;
        iD = id;
    }
    res.render('home', {
        questionContent:{
            content : question,
            id : iD,
            yes: yes,
            no: no
        }
    });
});

router.get('/info/:id',(req,res)=>{
    let ID = req.params.id;
    let data = [...Controller.readFileSync('data.json')];
        res.render('questionInfo',{
        questionInfo:{
            content: data[ID].question,
            id: ID,
            yes: data[ID].yes,
            no: data[ID].no
        }
    })
});

router.get('/empty',(req,res)=>{
    res.render('empty');
})



module.exports = router;