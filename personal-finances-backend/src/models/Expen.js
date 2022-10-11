const { Schema, model } = require('mongoose')

const expensesSchema = new Schema ({
  createdAt: { 
    type: Date,
    default: Date.now
  },
  type: String,
  description: String,
  amount: Number,
})

const Expen = model('Expen', expensesSchema)

module.exports = Expen