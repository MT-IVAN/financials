const express = require('express')
const router = express.Router()
const { createExpen, listExpenses } = require('../controllers/expenController')

router.get('/', listExpenses)
router.post('/', createExpen)

module.exports = router