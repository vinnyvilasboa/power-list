const db = require('./models');


async function addMovie() {
    const currentUser = await db.user.findByPk(1)
    currentUser.then(user => {
        db.movie.create({
            title: "Get Out",
            description: "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.",
            review: 7.7,
            user_id: user.id
      })
            .then(newMovie => {
                console.log(newMovie);

            })
    })

}
