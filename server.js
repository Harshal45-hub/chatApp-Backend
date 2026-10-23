const app = require('./src/app')
const connectDB = require('./src/config/db')

const http = require('http')
const {Server} = require('socket.io')


const server = http.createServer(app)

const io = new Server(server)

io.on("connect", (socket) => {
    console.log("A client connected", socket.id)

    socket.on("message", (message) => {
        console.log("message received:", message)

        socket.broadcast.emit("message", message)
    })

})

connectDB()
.then(() => {
    server.listen(5000, () => {
    console.log("app is listening on port 5000")
})
})
.catch(err => {
    console.log("server unable to listen", err)
})



