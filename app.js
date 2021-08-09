const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>home</h1>')
});
app.get('/hello', (req, res) => {
    res.send('<h1>hello js page</h1>')
});


app.listen(3000, () => {
    console.log('app is now listening on port 3000')
});