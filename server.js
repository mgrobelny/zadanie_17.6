var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views','./views');

app.use('/google', function(req, res, next){
    console.log('Jestem pośrednikiem przy żądaniu do /google');
    next();
});

app.get('/', function (req, res) {
    res.send('Hello world!');
});

app.get('/google', function(req, res){
    res.render('google-auth');
});

app.get('/auth/google', function(req, res){
    res.render('google-auth-logged');
});

app.listen(3000);
app.use(function (req, res, next) {
    res.status(404).send('Sorry, but something went wrong')
});