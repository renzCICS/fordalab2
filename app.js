const express = require("express");

const app = express();

//register view engine
app.set('view engine', 'ejs');

app.listen(3000, () => {
    console.log("server is running at port 3000...");
})

//middleware & static/public files
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.render('home', { title: 'Home' })
})

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' })
})

app.get('/donate', (req, res) => {
    res.render('donate', { title: 'Donate' })
})

app.get('/fundsupdates', (req, res) => {
    res.render('fundsupdates', { title: 'Funds Updates' })
})

app.get('/our-prog', (req, res) => {
    res.render('our prog', { title: 'Our Prog' })
})

app.get('/payment', (req, res) => {
    res.render('payment', { title: 'Payment' })
})

app.get('/thankyou', (req, res) => {
    res.render('thankyou', { title: 'Thank You' })
})

app.get('/volunteer', (req, res) => {
    res.render('volunteer', { title: 'Volunteer' })
})

//404 page



