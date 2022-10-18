const mongoose = require('mongoose')

// Make a Schema - tells us what we cannot do (i.e cannot be missing a d name, color, etc)
const pokeSchema = new mongoose.Schema({
    name: { type: String, require: true },
    nature: { type: String, required: true },
    readyToFight: Boolean
})


// Make a Model from the Schema

const Pokemon = mongoose.model('Pokemon', pokeSchema)

// Export the Model for Use in the App

module.exports = Pokemon