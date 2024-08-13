import React, { useState, useEffect } from 'react';
import { useSocket } from '../../context/socketContext';
import Board from '../../components/Board'; // Giả sử bạn đã có component Board

const Lobby = () => {
    const socket = useSocket();
    const [roomID, setRoomID] = useState('');
    const [message, setMessage] = useState('');
    const [isInRoom, setIsInRoom] = useState(false); // Trạng thái để kiểm soát việc hiển thị Board
    const [creator, setCreator] = useState('')

    useEffect(() => {
        if (!socket) return;

        socket.emit('check_user_in_room');

        socket.on('user_in_room', data => {
            setRoomID(data.roomID);
            setIsInRoom(true);
        });

        socket.on('room_is_created', msg => {
            setMessage(msg.msg);
            if (msg.msg === 'Room created successfully.') {
                setCreator(msg.creator)
                setRoomID(roomID);
                setIsInRoom(true);
            }
        });

        socket.on('join_success', msg => {
            setMessage(msg.msg);
            setRoomID(roomID);
            setIsInRoom(true);
        });

        socket.on('player_joined', data => {
            setRoomID(data.roomID);
            setIsInRoom(true);
        });

        socket.on('room_full', msg => setMessage(msg.msg));
        socket.on('room_not_exist', msg => setMessage(msg.msg));

        const handleBeforeUnload = () => {
            socket.emit('leave_room');
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            socket.emit('leave_room');
            socket.off('user_in_room');
            socket.off('room_is_created');
            socket.off('join_success');
            socket.off('player_joined');
            socket.off('room_full');
            socket.off('room_not_exist');
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [socket, roomID]);

    const handleCreateRoom = () => {
        if (roomID.trim() === '') {
            setMessage('Room ID cannot be empty.');
            return;
        }
        socket.emit('create_room', roomID);
    };

    const handleJoinRoom = () => {
        if (roomID.trim() === '') {
            setMessage('Room ID cannot be empty.');
            return;
        }
        socket.emit('join_room', roomID);
    };

    const handleLeaveRoom = () => {
        socket.emit('leave_room');
        setIsInRoom(false);
    };


    return (
        <div style={styles.container}>
            <h1>{`Phòng ${roomID}`}</h1>
            {!isInRoom ? (
                <div style={styles.inputContainer}>
                    <input 
                        type="text" 
                        placeholder="Enter Room ID" 
                        value={roomID} 
                        onChange={(e) => {
                            setRoomID(e.target.value);
                            setMessage('');
                        }} 
                        style={styles.input}
                    />
                    <button onClick={handleJoinRoom} style={styles.button}>Join Room</button>
                    <button onClick={handleCreateRoom} style={styles.button}>Create Room</button>
                    <p>{message}</p>
                </div>
            ) : (
                <div>
                    <button onClick={handleLeaveRoom} style={styles.button}>Leave Room</button>
                    <Board create={creator} roomID={roomID} socket={socket} />
                </div>
            )}
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px'
    },
    inputContainer: {
        display: 'flex',
        gap: '10px',
        marginBottom: '20px'
    },
    input: {
        padding: '10px',
        fontSize: '16px',
        color: 'black'
    },
    button: {
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
        background: 'var(--purple-primary)'
    }
};

export default Lobby;
