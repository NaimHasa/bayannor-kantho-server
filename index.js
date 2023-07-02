const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;


const categories = require('./Data/Categrouies.json');

app.use(cors());

app.get('/news-categrouies', (req, res) => {
    res.send(categories);
})



app.get('/', (req, res) => {
    res.send('BayannorKantho New protal server side ')
})

app.listen(port, () => {
    console.log('Bayannor kantho server is ranning', port)
})
