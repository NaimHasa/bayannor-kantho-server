const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;


const categories = require('./Data/Categrouies.json');
const news = require('./Data/news.json');

app.use(cors());

app.get('/news-categrouies', (req, res) => {
    res.send(categories);
})



app.get('/', (req, res) => {
    res.send('BayannorKantho New protal server side ')
})


app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    if (id === '8') {
        res.send(news);
    }
    else {
        const category_news = news.filter(n => n.category_id === id)
        res.send(category_news);
    }

})


app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    const selectedNews = news.find(n => n._id === id);
    res.send(selectedNews);


})

app.listen(port, () => {
    console.log('Bayannor kantho server is ranning', port)
})
