const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config()
if(!process.env.PORT) throw new Error('PORT NOT EXISTE IN THE SERVER')

const port = process.env.PORT
const app = express()

app.use(cors())
app.use(express.json())

app.listen(port, () => {
	console.log('Server runnig in http://localhost:'+ port)
})