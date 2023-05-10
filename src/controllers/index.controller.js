const { Response } = require("express")
const pool = require('../utils/postgressql')

const getAllEmployees = async(req, res = Response) => {
    try {
        const response = await pool.query('SELECT * FROM employees;')
        return res.status(200).json({data: response.rows})
    } catch (error) {
        console.error(error)
        return res.status(400).json({message:'Internal server error'})
    }
}

module.exports = {
    getAllEmployees
}