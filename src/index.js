const express = require('express')
const router = require('./routes/index')
const cors = require('cors')

const app = express()

// middlewares
app.use(cors({origin: '*'}))
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
app.use(router);

app.listen(3000);
console.log('Server on port', 3000);