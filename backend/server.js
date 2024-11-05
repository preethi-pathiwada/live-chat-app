// server.js
const express = require('express');
const connectDB = require("./db");
const User = require("./models/User")

const app = express();
connectDB();

app.use(express.json());

app.listen(5000, () => {
  console.log("Server is running at http://localhost:5000");
});























// const http = require('http');
// const { Server } = require('socket.io');
// const cors = require("cors")

// const app = express();
// const server = http.createServer(app);

// app.use(cors({
//     origin:"http://localhost:3000",
//     methos:["GET", "POST"],
//     credentials:true
// }));

// const io = new Server(server, {
//   cors: {
//     origin: "http://localhost:3000", // Frontend URL
//     methods: ["GET", "POST"]
//   }
// });

// // Listen for incoming connections
// io.on('connection', (socket) => {
//   console.log('User connected:', socket.id);

//   // Listen for chat messages
//   socket.on('send_message', (data) => {
//     io.emit('receive_message', data); // Broadcast message to all users
//   });

//   // Handle disconnection
//   socket.on('disconnect', () => {
//     console.log('User disconnected:', socket.id);
//   });
// });

// // Start the server
// const PORT = 5000;
// server.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
