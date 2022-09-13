const express = require('express');
const app = express();
const format = require('date-format');
require('dotenv').config();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.status(200).send("<h1>Hello World</h1>");
})

app.get('/api/v1/instagram', (req, res) => {
    const instaSocial = {
        username: "said1854",
        followers: 322,
        follows: 372,
        date: format()
    }
    res.status(200).json({
        instaSocial
    })
})
app.get('/api/v1/facebook', (req, res) => {
    const instaSocial = {
        username: "said1854",
        followers: 474,
        follows: 441,
        date: format.asString('dd[MM] - hh:mm:ss', new Date())
    }
    res.status(200).json(instaSocial)
})
app.get('/api/v1/linkedin', (req, res) => {
    const instaSocial = {
        username: "said1854",
        followers: 120,
        follows: 112,
        date: Date.now()
    }
    res.status(200).json({
        instaSocial
    })
})

app.get('/api/v1/:token', (req, res) => {
    console.log(req.params.token)
    res.status(200).json({
        token: req.params.token
    })
})
app.get('/api/v1/:token/:id', (req, res) => {
    console.log(req.params.token)
    res.status(200).json({
        token: req.params.token,
        id: req.params.id
    })
})

app.listen(PORT)