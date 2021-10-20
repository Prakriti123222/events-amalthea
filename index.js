const events = require("./data/data.js")
const express = require('express');
const app = express();

const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.render('home', {events: events});
})

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on port ${PORT}`);
})