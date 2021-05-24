# TITLE:  POWER-LIST
### DESCRIPTION: A list where people can add their top 5 favorite movies for other people to get inspired when they don't know what to watch!

---

## How to use it 
[CLICK HERE TO TAKE YOU TO PAGE](https://powerlist.herokuapp.com/)


--- 

## How it works: 

### After Logging in, it brings you to the home page (pictured below) and you add movies to your TOP 5, through the search bar. If for some reason, your movie doesn't come up you can add it through the ADD TO FAVORITES button. Once it opens up on new page rendering all your favorite movies, you can update it or delete it by using the designated buttons. Once you're done you can update it if one of the movies changes. 

---

## Home Page 
![HOME PAGE HEROKU](./images/home-page-heroku.PNG)

---

## Search Page 
![Search](./images/search.PNG)

---

## Favorite Movies List
![Favorite Movies](./images/movie-list.PNG)

---

## Future Considerations / Stretch Goals
### - adding decimals option to personal review
### - add search bar to the favorites list
### - make the app look presentable

---

## WireFrame

### Original Home Page Plan
![HOME PAGE](./images/front-page.PNG)

---

## Code Snippet
```
    const results = await axios.get(`http://www.omdbapi.com/?apikey=${APIKey}&s=${req.query.search}`)

    console.log(results.data.Search)
    res.render('movies/results', { movieResults: results.data.Search ? results.data.Search : [] });

})
```