const {Socket, Server}  = require('socket.io')

const {
	connection,
	disconnect
} =  require('./events')

const client = ( io = Server) => {
	io.on(connection, ( client = new Socket()) => {
		console.log('new client connected')

		client.on(disconnect, () => {
			console.log('some client has been disconnect')
		})
		
	})
}


module.exports = client