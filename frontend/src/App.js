import {BrowserRouter, Routes, Route} from "react-router-dom"

import "./App.css"

import RegisterPage  from "./components/RegisterPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/register" element={<RegisterPage/>}/>
      </Routes>
    </BrowserRouter>
  )
};

export default App;















// import React, { useState, useEffect } from 'react';
// import io from 'socket.io-client';

// const socket = io.connect('http://localhost:5000');

// function App() {
//   const [message, setMessage] = useState('');
//   const [messages, setMessages] = useState([]);

//   useEffect(() => {
//     // Listen for incoming messages
//     socket.on('receive_message', (data) => {
//       setMessages((prevMessages) => [...prevMessages, data]);
//     });
//     return () => socket.off('receive_message');
//   }, []);

//   const sendMessage = () => {
//     console.log(messages)
//     if (message.trim()) {
//       socket.emit('send_message', { message });
//       setMessage(''); // Clear the input field
//     }
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>Live Chat</h1>
//       <div style={{ border: '1px solid #ddd', padding: '10px', height: '300px', overflowY: 'scroll' }}>
//         {messages.map((msg, index) => (
//           <div key={index}>
//             <strong>User:</strong> {msg.message}
//           </div>
//         ))}
//       </div>
//       <input
//         type="text"
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//         placeholder="Type your message"
//       />
//       <button onClick={sendMessage}>Send</button>
//     </div>
//   );
// }

// export default App;