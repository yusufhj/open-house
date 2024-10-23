const express = require('express');
const router = express.Router();

const Listing = require('../models/listing.js');

router.get('/', async (req, res) => {
    try {
        const listings = await Listing.find({});
        console.log(listings);
        res.render('listings/index.ejs');
    } catch (error) {
        console.log(error);
    }
});


module.exports = router;