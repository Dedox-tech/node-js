const express = require('express')
const productsRouter = require('./src/routes/products')

//Error handling
const { invalidPath,  logErrors, clientErrorHandler, errorHandler } = require('./src/middlewares/errorHandler')

const app = express()
const port = 3000

app.use(express.json())

app.use((req, res, next) => 
{
  console.log('Entrando middleware principal')
  console.log(`${req.method} ${Date.now} ${req.url} ${req.path}`)

  //res.status(500).json({error: 'Mensaje error'})

  next()
})

app.use('/products', productsRouter)

// app.get('/goodbye', (req, res) => {
//   res.send('Bye bye World!')
// })


app.use(logErrors)
app.use(clientErrorHandler)
app.use(errorHandler)

app.use(invalidPath)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
