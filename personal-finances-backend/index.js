const express = require('express')
const expensesRouter = require('./src/routes/expenses.route')

const cors = require('./src/middlewares/cors')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(cors)

app.use('/expenses', expensesRouter)

module.exports = {
  app,
}