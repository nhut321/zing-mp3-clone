import React, { useState, useEffect } from 'react';
import { useSocket } from "../../context/socketContext";

const Chat = ({ roomID }) => {
    /* const socket = useSocket();
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const handleReceiveMessage = ({ message, sender }) => {
            setMessages((prevMessages) => [...prevMessages, { message, sender }]);
        };
        socket.on('receive_message', handleReceiveMessage);

        // Clean up socket on component unmount
        return () => {
            socket.off('receive_message');
        };
    }, [socket]);

    const sendMessage = () => {
        if (message.trim() === '') return;

        const sender = socket.id;
        socket.emit('send_message', { roomID, message, sender });
        setMessage('');
    };

    return (
        <div className="chat-container">
            <div className="messages">
                {messages.map((msg, index) => {
                    return (
                        <div key={index} className={`message ${msg.sender === socket.id ? 'my-message' : 'other-message'}`}>
                            <span>{msg.sender === socket.id ? 'You' : 'Opponent'}: </span>
                            {msg.message}
                        </div>
                    )
                })}
            </div>
            <input
                style={{
                    color: 'black',
                    padding: '5px',
                }}
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
            />
            <button style={{
                background: 'var(--purple-primary)',
                padding: '5px'
            }} onClick={sendMessage}>Send</button>
        </div>
    );
    */
};

export default Chat;
