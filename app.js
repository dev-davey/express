const express = require('express');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({extended: false}))

app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('index')
});

app.get('/card', (req, res) => { 
    res.render('card', {prompt:"who is burried in grants tomb" })
});

app.get('/hello', (req, res) => { 
    res.render('hello')
});

app.post('/hello', (req, res) => {
    res.render('hello', {username: req.body.username})
    console.dir(req.body)
})


app.listen(3000, () => {
    console.log('app is now listening on port 3000')
});