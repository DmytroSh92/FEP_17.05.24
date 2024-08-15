import React, {useEffect, useState} from 'react';

function ResultsComponent({emojis}) {
    const [winners, setWinners] = useState([]);

    useEffect(() => {
        const calculateWinners = () => {
            const maxCount = emojis.reduce((max, emoji) => emoji.count > max ? emoji.count : max, 0);
            const winners = emojis.filter(emoji => emoji.count === maxCount);
            setWinners(winners);
        };

        calculateWinners();
    }, [emojis]);

    return (
        <div className="container">
            <h2>Результати голосування:</h2>
            <div className="App result-block">
                {winners.map((winner, index) => (
                    <div key={index}>
                        <h3>Переможець:</h3>
                        <img src={winner.src} alt="emoji" className="app-img"/>
                        <p className="img-count">Кількість голосів: {winner.count}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ResultsComponent;
