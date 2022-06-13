const express = require('express')
const app = express()

app.set('view engine', 'ejs');

// middleware
app.use(express.static('public'))

const bicycles = require('./data/data.json')

app.get('/', (req, res) => {

    return res.render('bicycles', {
        bicycles
    })
})
app.get('/bicycle', (req, res) => {
    console.log(req.query.id)
    const bicycle = bicycles.find(b => b.id === req.query.id)
    return res.render('overview', {
        bicycle
    })
})
app.listen(3000, () => console.log("SERVER IS RUNNING AT PORT 30000"));