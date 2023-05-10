const { Response } = require("express")
const pool = require("../utils/postgressql")

const getAllEmployees = async (req, res = Response) => {
    try {
        const response = await pool.query("SELECT * FROM employees;")
        return res.status(200).json({ data: response.rows })
    } catch (error) {
        console.error(error)
        return res.status(400).json({ message: "Internal server error" })
    }
}

const getOneEmployee = async (req, res = Response) => {
    try {
        const id = parseInt(req.params.id)
        const response = await pool.query("SELECT * FROM employees WHERE id = $1", [id])
        console.log(response)
        if(response.rowCount == 0) return res.status(404).json({message: 'Employee not found'})
        return res.status(200).json({ data: response.rows[0]})
    } catch (error) {
        console.error(error)
        return res.status(400).json({ message: "Internal server error" })
    }
}

const saveEmployee = async (req, res = Response) => {
    try {
        const { name, surname, lastname, email } = req.body
        const response = await pool.query("INSERT INTO employees (name, surname, lastname, email) VALUES($1, $2, $3, $4);", [name, surname, lastname, email])
        return res.status(200).json({message: 'Employee created ', employee: {name: name, surname: surname, lastname: lastname, email: email}})
    } catch (error) {
        console.error(error)
        return res.status(400).json({ message: "Internal server error" })
    }
}

const updateEmployee = async(req, res = Response) => {
    try {
        const id = req.params.id
        const {name, surname, lastname, email} = req.body
        const response = await pool.query('UPDATE employees SET name = $2, surname = $3, lastname = $4, email = $5 WHERE id = $1;', [id, name, surname, lastname, email])
        console.log(response)
        return res.status(200).json({message: 'Employee updated', employee: {name: name, surname: surname, lastname: lastname, email: email}})
    } catch (error) {
        console.error(error)
        return res.status(400).json({message: 'Internal server error'})        
    }
}

module.exports = {
    getAllEmployees,
    getOneEmployee,
    saveEmployee,
    updateEmployee
}
