const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());
const mainRoutes = require('./routes')
const cardRoutes = require('./routes/cards')

app.set('view engine', 'pug');



app.use((req, res, next) => {
    console.log('two');
    next()
})

app.use(mainRoutes);
app.use('/cards', cardRoutes);

app.use((req, res, next) => {
    const err = new Error('not found')
    err.status = 404;
    next(err)
})

app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    res.render('error', err);
})

app.listen(3000, () => {
    console.log('The application is running on localhost:3000!')
});