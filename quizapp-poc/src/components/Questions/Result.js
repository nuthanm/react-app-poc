import React from 'react';

const Result = ({score, responses, playAgain}) => {
    return(   
        <div className="score-board">
            <div className="score">
                {
                    (score === responses) ? "Congratulation!!! All are correct" : 
                    (score < 2 ? "Better luck Next time" : "Good Try, Keep it up") 
                }            
            </div>
            <button className="playBtn" onClick={playAgain}>Play Again!</button>
        </div>
    );
}

export default Result;
