if the attribute names in the models don't match the db it won't give you back anything.
user_id wasn't matching userID

The server makes the request that routes it to the appropriate controllers. 
app.user('/movies'....)
router.get('/search....)

from the controller it will connect it to the models which will pull info from the database and to then show up in views aka templates.