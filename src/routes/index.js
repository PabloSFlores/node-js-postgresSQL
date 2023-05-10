const { Router } = require("express")
const { getAllEmployees } = require("../controllers/index.controller")
const router = Router()

router.get('/employees', getAllEmployees)

module.exports = router;