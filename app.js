const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const Campground = require('./models/campground');


const app = express();

mongoose.connect('mongodb://localhost:27017/yelp-camp', { //default port
    useNewUrlParser: true,
    //useCreateIndex: true, //doesnt work for some reason, mongoose is up to date
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", ()=>{
    console.log("Database connected");
})

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req,res)=>{
    res.render('home');
})

app.get('/makecampground', async (req, res)=> {
    const camp = new Campground({title: 'My backyard', description: 'cheap camping'});
    await camp.save();
    res.send(camp);
})

app.get('/campgrounds', async(req,res) => {
    const campgrounds = await Campground.find({});
    res.render('campgrounds/index');
})

app.listen(3000, () => {
    console.log("Serving on port 3000");
})