import React, { useState, useEffect, useRef, useCallback } from 'react';
import io from 'socket.io-client';
import { getMessage } from '../../services/getMessage';
import './ChatPage.css';

const socket = io(process.env.REACT_APP_URL_ZING); // Địa chỉ của server Socket.IO

const ChatPage = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [name, setName] = useState('');
    const [isNameSet, setIsNameSet] = useState(false);
    const [isLoading, setIsLoading] = useState(false)
    const messagesEndRef = useRef(null);

    useEffect(() => {
        const fetchFn = async () => {
            const messItem = await getMessage()
            await setIsLoading(true)
            const result = messItem.reverse();
            await setMessages(result)
        }
        
        fetchFn()
    },[])

    // Đăng ký và gỡ bỏ sự kiện nhận tin nhắn
    useEffect(() => {
        

        const savedName = localStorage.getItem('userName');
        if (savedName) {
            setName(savedName);
            setIsNameSet(true);
        }

        const handleReceiveMessage = (message) => {
            console.log('Message received:', message);
            setMessages((prevMessages) => [...prevMessages, message]);
        };

        socket.on('receiveMessage', handleReceiveMessage);
        return () => {
            socket.off('receiveMessage', handleReceiveMessage);
        };
    }, []);

    // Cuộn tự động đến tin nhắn mới
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    // Gửi tin nhắn
    const handleSendMessage = useCallback(() => {
        if (input.trim() !== '') {
            const message = { text: input, user: name };
            console.log('Sending message:', message);
            socket.emit('sendMessage', message);
            // setMessages((prevMessages) => [...prevMessages, message]);
            console.log(messages)
            setInput('');
        }
    }, [input, name]);
    
    // Xử lý thay đổi đầu vào
    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    // Xử lý khi nhấn phím Enter
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSendMessage();
        }
    };

    // Xử lý khi người dùng nhập tên
    const handleNameSubmit = () => {
        if (name.trim() !== '') {
            localStorage.setItem('userName', name);
            setIsNameSet(true);
        }
    };

    const handleChangeName = () => {
        localStorage.removeItem("userName");
        setIsNameSet(false);
    }

    return (
        <div className="chat-container">
            {!isNameSet ? (
                <div className="name-entry">
                    <input
                        style={{
                            flex: 0,
                            padding: "20px"
                        }}
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Nhập tên của bạn..."
                    />
                    <button onClick={handleNameSubmit}>Xác nhận</button>
                </div>
            ) : (
                <>
                    <div className="chat-header">
                        <button onClick={handleChangeName}>đổi tên</button>
                        <h1>PUBLIC CHAT</h1>
                    </div>
                    <div className="chat-box">
                        {
                            isLoading 
                            ?
                            messages.map((msg, index) => (
                                <div
                                    key={index}
                                    className={`message ${msg.user === name ? 'user-message' : 'other-message'}`}
                                >
                                    {/* <strong>{msg.user}:</strong> {msg.text} */}
                                    { msg.user === name ? <>{msg.text}<strong> :{msg.user}</strong></>:<><strong>{msg.user}:</strong> {msg.text}</> }
                                </div>
                                ))
                            :
                            <img style={{width: '8%'}} src={require('../../assets/images/loading.gif')} alt="" />

                        }
                        <div ref={messagesEndRef} />
                    </div>
                    <div className="chat-footer">
                        <input
                            type="text"
                            value={input}
                            onChange={handleInputChange}
                            onKeyPress={handleKeyPress}
                            placeholder="Nhập tin nhắn..."
                        />
                        <button onClick={handleSendMessage}>Gửi</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default ChatPage;
