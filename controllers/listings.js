const express = require('express');
const router = express.Router();

const Listing = require('../models/listing.js');

router.get('/', async (req, res) => {
    try {
        const listings = await Listing.find({});
        console.log('Listing: ', listings);
        res.render('listings/index.ejs');
    } catch (error) {
        console.log(error);
    }
});

router.get('/new', (req, res) => {
    res.render('listings/new.ejs');
});

router.post('/', async (req, res) => {
    try {
        const listingData = req.body;
        const owner = req.session.user._id;
        listingData.owner = owner;
        await Listing.create(listingData);
        res.redirect('/listings');
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;