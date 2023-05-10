const { Router } = require("express")
const { getAllEmployees, getOneEmployee,saveEmployee, updateEmployee, deleteEmployee } = require("../controllers/index.controller")
const router = Router()

router.get('/employees', getAllEmployees)
router.get('/employees/:id', getOneEmployee)
router.post('/employees', saveEmployee)
router.put('/employees/:id', updateEmployee)
router.delete('/employees/:id', deleteEmployee)

module.exports = router;