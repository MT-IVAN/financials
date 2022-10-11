const Expen = require('../models/Expen')

const getExpenses = async () => {
  const expenses = Expen.find({})
  return expenses
}

const insertExpen = async (expen) => {
  const newExpen =  new Expen(expen)
  const record = newExpen.save()
  return record
}

module.exports = {
  getExpenses,
  insertExpen
}