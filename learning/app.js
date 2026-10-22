const express = require('express');
const port = 3000;
const app = express();

app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send("Hello");
});

app.get('/pugger', (req, res) => {
    res.render('index');
})

app.get('/:name', (req, res) => {
    let name = req.params
    res.send(name);
});

app.listen(port, () => {
    console.log("Server is active");
});