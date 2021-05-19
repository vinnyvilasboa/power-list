const express = require('express');
const router = express.Router();
const db = require('../models');
const axios = require("axios");

const APIKey = process.env.API_KEY;


router.get('/search', (req,res) => {
    res.render('movies/search')
})

router.get('/results', async (req,res) => {
    console.log(req.query.search);

const results = await axios.get(`http://www.omdbapi.com/?apikey=${APIKey}&s=${req.query.search}`)
res.send(results.data)

})

module.exports = router;