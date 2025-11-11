const express = require('express');
const router = express.Router();
const { converterWeight } = require('../utils/converter');


router.post('/', (req, res) =>{
    const{from, to, value} = req.body;

    if(!from || !to || !value){
        return res.status(400).json({
            err: "Missing required fields"
        })
    }

    try{
        const result = converterWeight(from, to, value);
        res.json({
            result
        })
    }catch(err){
        return res.status(500).json({
            error: err.message
        })
    }
})

module.exports = router;