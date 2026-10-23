const io = require('socket.io-client')

const socket = io('http://localhost:5000')

socket.on('connect', () => {
    console.log("connected", socket.id)

    socket.emit("message", {
        sender: "sender B",
        message: "Hello from client B"
    })
})

socket.on("message", (message) => {
    console.log(
        `sender: ${message.sender},
message: ${message.message}`       
    )
})