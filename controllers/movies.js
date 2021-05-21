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
router.get('/new', (req, res) => {
    res.render('movies/new')
})
router.post('/new', async (req, res) => {
    const createMovie = await db.movie.findOrCreate({
        where: {title: req.body.title},
        default: {title: req.body}

    })
    res.redirect('new')
    console.log(req.body)
})

module.exports = router;

/*
router.post('/', async (req,res) => {
  const [category, created] = await db.category.findOrCreate({
    where: {name: req.body.category},
    defaults: {name: req.body.category}
  })

*/
// router.post('/', function(req, res) {
//     // TODO: Get form data and add a new record to DB
//     const createMovie = db.movie.create(req.body)
//       res.redirect('/movies')
//     })
//   });