const express = require('express')
const { config } = require('dotenv')
const { createServer } = require('http')
const { Server } = require('socket.io')
config()

const client = require('./socket')

if(!process.env.PORT) throw new Error('SERVER PORT NOT SET')

const port = process.env.PORT
const app = express()
app.use(express.static('public'))
app.use(express.json())

const httpServer = createServer(app)
const io = new Server(httpServer, { 
	cors:{
		origin:'http://localhost:8000',
		credentials: true
	}
})

client(io)

httpServer.listen(port, () => {
	console.log('Server Running in the port:'+ port)
})