const express = require('express');
const router = express.Router();
const Controller = require('./Controller');

router.get('/:id/:bool',(req,res)=>{
    let data = [...Controller.readFileSync('data.json')];
    let Id = req.params.id;
    let bool = req.params.bool;
    if(bool === 'yes')  data[Id].yes++;
    else data[Id].no++;
    Controller.writeFile('./data.json',data,(err) =>{
        if(err) throw err;
        res.redirect('/question/info/' + Id);
    }
    )
})

module.exports = router;