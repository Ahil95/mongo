const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/test');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
    console.log('connect')
})

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
})

const Movie = mongoose.model('Movie', movieSchema)

// Insert

Movie.insertMany([
    { title: 'The Flash', year: 2019, score: 9.2 },
    { title: 'Incredibles', year: 2017, score: 8.6 }
])

//Find

Movie.find({ score: 8.2 }).then(data => console.log(data))

//Update

Movie.updateOne({ title: 'The Flash' }, { score: 9.1 })

Movie.findOneAndUpdate({ title: 'Incredibles' })

//Delete

Movie.remove({ title: 'The Flash' })

Movie.deleteMany({ year: { $gte: 2017 } }).then(msg => { console.log(msg) })