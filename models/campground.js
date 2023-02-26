const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CampgroundSchema =  new Schema({
    title: String,
    price: String,
    description: String,
    location: String
})

module.exports = mongoose.model('Campground', CampgroundSchema); //Exports a Mongoose model for the Campground schema.
                                                                //the name of the model ('Campground')
                                                                //creates a new Mongoose model for the Campground schema 
                                                                //that can be used to perform CRUD operations on campground objects