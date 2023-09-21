import express from 'express'

import playersRouter from './routes/players.js'

const app = express()

app.use('/public', express.static('./public'));
app.use('/scripts', express.static('./public/scripts'))

app.use('/players', playersRouter)

app.get('/', (req, res) => {
    res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">Listicle API</h1>')
})

// const PORT = process.env.PORT || 3001

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`🚀 Server listening on http://localhost:${PORT}`)
})