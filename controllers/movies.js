const express = require('express');
const router = express.Router();
const axios = require("axios");
const db = require('../models');

const APIKey = process.env.API_KEY;

router.get('/search', (req, res) => {
    res.render('movies/search')
})
router.get('/results', async (req, res) => {
    console.log(req.query.search);
    const results = await axios.get(`http://www.omdbapi.com/?apikey=${APIKey}&s=${req.query.search}`)

    console.log(results.data.Search)
    res.render('movies/results', { movieResults: results.data.Search ? results.data.Search : [] });

})

router.post('/new', async (req, res) => {
    const createMovie = await db.movie.create(req.body)
    res.redirect('/movies')
    console.log(createMovie)
})

module.exports = router;


// router.post('/', function(req, res) {
//     // TODO: Get form data and add a new record to DB
//     const createMovie = db.movie.create(req.body)
//       res.redirect('/movies')
//     })
//   });