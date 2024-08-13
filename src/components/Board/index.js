import { useEffect, useState } from "react";
import Square from "../Square";
import { useSocket } from "../../context/socketContext";
import Chat from "../Chat";

const Board = ({ roomID, create }) => {
  const [lastMove, setLastMove] = useState(null);
  const socket = useSocket();

  const CONFIG = {
    DIMENSION: 20,
  };

  const [squares, setSquares] = useState(
    Array(CONFIG.DIMENSION).fill(Array(CONFIG.DIMENSION).fill(null))
  );
  const [xIsNext, setXIsNext] = useState(true);

  useEffect(() => {
    socket.emit('join_room', roomID);

    socket.on('join_success', ({ gameState, creator }) => {
      console.log('join room')
      setSquares(gameState);
      if (socket.id === creator) {
        console.log('You are the room creator.');
      } else {
        console.log(`Room created by: ${creator}`);
      }
    });

    socket.on('receive_move', ({ i, j, symbol }) => {
      let newSquares = squares.map((r) => [...r]);
      newSquares[i][j] = symbol;
      setSquares(newSquares);
      setLastMove({ i, j }); // Cập nhật vị trí nước đi cuối cùng
      setXIsNext(!xIsNext);
    });

    socket.on('player_left', ({ msg }) => {
      alert(msg);
      setSquares(Array(CONFIG.DIMENSION).fill(Array(CONFIG.DIMENSION).fill(null)));
      setXIsNext(true);
    });

    // Listen for restart event
    socket.on('restart_game', () => {
      setSquares(Array(CONFIG.DIMENSION).fill(Array(CONFIG.DIMENSION).fill(null)));
      setXIsNext(true);
    });

    return () => {
      socket.off('receive_move');
      socket.off('join_success');
      socket.off('player_left');
      socket.off('restart_game'); // Clean up restart listener
    };
  }, [socket, squares, xIsNext, roomID, CONFIG.DIMENSION]);

  const handleClick = (i, j) => {
    if (squares[i][j] !== null) return;

    const symbol = xIsNext ? "X" : "O";
    let newSquares = squares.map((r) => [...r]);
    newSquares[i][j] = symbol;
    setSquares(newSquares);
    setLastMove({ i, j });
    setXIsNext(!xIsNext);


    socket.emit('make_move', { roomID, move: { i, j, symbol } });
  };

  const handleRestart = () => {
    // Emit restart event to server
    socket.emit('restart_game', { roomID });
  };

  const renderSquare = (i, j) => {
    // return <Square value={squares[i][j]} onClick={() => handleClick(i, j)} />;
    const isLastMove = lastMove && lastMove.i === i && lastMove.j === j;
    return <Square value={squares[i][j]} onClick={() => handleClick(i, j)} isLastMove={isLastMove} />;
  };

  const renderTwoDimensionSquare = (i, j) => {
    let arrForLoopRow = Array(i).fill(null);
    let arrForLoopCol = Array(j).fill(null);

    return arrForLoopRow.map((e1, idx) => (
      <div className="board-row" key={idx}>
        {arrForLoopCol.map((e2, jdx) => renderSquare(idx, jdx))}
      </div>
    ));
  };

  // let status = "Next player: " + (xIsNext ? "X" : "O");

  return (
    <div className="container">
      <div className="game-wrap">
        <button
          style={{
            background: 'var(--purple-primary)',
            padding: '10px'
          }}
          onClick={handleRestart}
        >
          Bắt đầu lại
        </button>
        {/* <div className="status">{status}{` người chơi: ${socket.id}`}</div> */}
        {
          create === socket.id
          ?
          <p>Chủ phòng quýnh X</p>
          :
          <p>Khách quýnh O</p>
        }
      </div>
      {renderTwoDimensionSquare(CONFIG.DIMENSION, CONFIG.DIMENSION)}
      <Chat roomID={roomID}/>
    </div>
  );
};

export default Board;

