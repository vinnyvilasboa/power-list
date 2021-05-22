const express = require('express');
const router = express.Router();
const axios = require("axios");
const db = require('../models');
const { route } = require('./auth');

const APIKey = process.env.API_KEY;

router.get('/', (req, res)=>{
    db.movie.findAll()
    .then((foundMovies) => {
        console.log("here is found movie")
        console.log(foundMovies)
        res.render('movies/index', {
            allMovies: foundMovies
        })
    })
})



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
        defaults: {review: req.body.review, description: req.body.description, userId: req.user?req.user.id:1}
    })
    res.redirect('/movies')
    console.log(req.body)
})

router.put('/update', (req, res) => {
    console.log(req.body.updateDescription)
    console.log("here is updateDescription")
    console.log(req.body.updateReview)
    console.log("here is updateReview")
    console.log(req.body.movieId)
    db.movie.update(
        {
            description: req.body.updateDescription,
            review: req.body.updateReview
        },
        { where: {id: req.body.movieId} }
    ).then(updatedMovie => {
        console.log("here is updated movie")
        console.log(updatedMovie)
        res.redirect('/movies')
    })
})

router.delete('/delete', (req, res)=> {
    db.movie.destroy(
        { where: {id: req.body.delete} }
    ).then(deletedMovie => {
        console.log("movie successfully deleted")
        res.redirect('/movies')
    })
})
module.exports = router;

