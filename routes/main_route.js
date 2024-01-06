const express = require('express');

const router = express.Router();

router.get('/weather', (req, res, next)=>{
    res.render('weather', {pageTitle: 'weather'});
});


router.get('/', (req, res, next)=>{
    res.render('home', {pageTitle: 'home'});
});

router.post('/weather', (req,res,next)=>{
    console.log('Caught');
    res.redirect('/weather');
})

exports.routes = router;