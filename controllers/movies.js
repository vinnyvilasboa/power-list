const express = require('express');
const router = express.Router();
const db = require('../models');
const axios = require("axios");

const APIKey = process.env.API_KEY;

//route to search EJS layout
router.get('/search', (req,res) => {
    res.render('movies/search')
})
//route to results file in movies folder 
router.get('/results', async (req,res) => {
    console.log(req.query.search);


const results = await axios.get(`http://www.omdbapi.com/?apikey=${APIKey}&s=${req.query.search}`)
// res.send(results.data.Search)
console.log(results.data.Search)
res.render('movies/results', {movieResults:results.data.Search?results.data.Search:[]});

})

// .then(response =>{
    //     let movieData = response.data
    //     let movieTitle = movieData.title
    //     let movieYear = movieData.year
    //     let moviePoster = movieData.poster
    //     res.render('movies/search', {poke: pokeData, moves: pokeMoves, types: pokeTypes, image: pokeImg})
    //   })

module.exports = router;