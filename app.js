const express = require("express");
const bodyPraser = require("body-parser");
const handlebars = require("express-handlebars").create({defaultLayout:'main'});

const routes = require('./routes/main_route');

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use('/', routes.routes);

app.use('/', (req,res,next)=>{
    res.render('404err', {pageTitle: '404 Error'});
})


app.listen(3000);