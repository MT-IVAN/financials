const { getExpenses, insertExpen } = require('../repositories/expenRepository')


//add error handling
const createExpen = async (req, res) => {
  const newExpen = req.body
  return res.status(201).send(await insertExpen(newExpen))
}

const listExpenses = async (req, res) => {
  return res.status(200).send(await getExpenses())
}

module.exports = {
    createExpen,
    listExpenses,
}

