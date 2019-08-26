import React from 'react';

function Header(props) {
    return (
        <div>
            <h1>Avengers Click Game</h1>
            <p>This is a simple game built in React to test your memory. Click images and they will rotate. </p>
            <p>The objective is to click images you have not already chosen. As you successfully do that, the score will increment. </p>
            <p>If you choose one already clicked, the game will start over.</p>
            <ul>
                <li>Current Score: {props.score}</li>
                <li>Message: {props.message}</li>
            </ul>
            <hr></hr>
        </div>
    )
}

export default Header