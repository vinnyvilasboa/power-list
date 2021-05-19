const db = require('./models');


// async function addMovie() {
//     const currentUser = await db.user.findByPk(1)
//     currentUser.then(user => {
//         db.movie.create({
//             title: "Get Out",
//             description: "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.",
//             review: 7.7,
//             user_id: user.id
//         })
//             .then(newMovie => {
//                 console.log(newMovie);
//             })
//     })

// }
// addMovie();


// async function addNewMovie() {
//     const currentUser = await db.user.findByPk(1)
//     currentUser.then(user => {
        // db.movie.create({
        //     title: "Get Out",
        //     description: "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.",
        //     review: 7.7,
        //     user_id: user.id

        // })
        //     .then(newMovie => {
        //         console.log(newMovie);
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     })

//         console.log(user)
//     })
// }

// addNewMovie();


function createUser() {
    db.user.create({
        name: "Vinny Vilasboa",
        email: "vinnycesca@gmail.com",
        password: "123456789"
    })
    .then(foundUser => {
        console.log(foundUser)
        // allUsers();

    })

}
// createUser();


function allUsers() {
    db.user.findAll()
    .then(result => {
        console.log("here is all users")
        console.log(result)
    })
}
// allUsers();

function addMovie() {
    db.user.findOne({
        where: {
            id: 1
        }
    }).then(foundOneUser => {
        console.log(foundOneUser)
        db.movie.create({
            title: "Fight Club",
            description: "2 guys fight in a basement, dont talk about it",
            review: 7,
            userId: foundOneUser.id

        })
        .then(newMovie => {
        console.log(newMovie);
        db.comment.create({
            body: "random comment yo",
            userId: foundOneUser.id,
            movieId: newMovie.id
        }).then(createComment => {
            console.log(createComment)
        })
        })
        .catch(err => {
        console.log(err);
        })
    })
    
}
addMovie();

