import React from 'react';
import './Square.css';

const Square = (props) => {
    const { value, onClick, isLastMove } = props;
    const className = `square ${value === "X" ? "styleX" : "styleO"} ${isLastMove ? "last-move" : ""}`;

    return (
        <button className={className} onClick={onClick}>
            {value}
        </button>
    );
};

export default Square;