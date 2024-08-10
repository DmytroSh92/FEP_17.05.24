import './App.css';
import React, {useEffect, useState} from "react";
import {DataEmojis} from "./data/Emojis";
import EmojiComponent from "./components/EmojiComponent";

function App() {
    const [isVisible, setIsVisible] = useState(false)
    const [emojis, setEmojis] = useState([]);
    const [winners, setWinner] = useState([]);

    useEffect(() => {
        const storedData = localStorage.getItem('emojiData');
        if (!storedData) {
            localStorage.setItem('emojiData', JSON.stringify(DataEmojis));
        }

        setEmojis(JSON.parse(localStorage.getItem('emojiData')));
    }, []);


    const handleResult = () => {
        setEmojis(JSON.parse(localStorage.getItem('emojiData')));
        setIsVisible(!isVisible);
        setWinner(getWinner);
    };

    const getWinner = () => {
        const emj = JSON.parse(localStorage.getItem('emojiData'));
        const maxCount = emj.reduce((max, emoji) => emoji.count > max ? emoji.count : max, 0);
        return emj.filter(emoji => emoji.count === maxCount);
    };

    const resetCounters = () => {
        setEmojis(DataEmojis);
        localStorage.setItem('emojiData', JSON.stringify(DataEmojis));
        setIsVisible(false);
    };

    return (
        <div className={"container"}>
            <h1>Голосування за найкращий смайлик</h1>
            <div className="App">
                {emojis.map((emoji, index) => (
                    <EmojiComponent key={index} id={emoji.id} src={emoji.src} count={emoji.count}/>
                ))}
            </div>
            <div>
                <button onClick={handleResult} className={"result-button"}>Show Results</button>
                {isVisible && winners &&
                    <div className={"container"}>
                        <h2>Результати голосування:</h2>
                        <div className={"App result-block"}>
                            {winners.map((winner, index) => (
                                <div key={index}>
                                    <h3>Переможець:</h3>
                                    <img src={winner.src} alt={"emoji"} className={"app-img"}/>
                                    <p className={"img-count"}>Кількість голосів: {winner.count}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                }
                <div>
                    <button onClick={resetCounters} className={"result-button reset-button"}>Reset Results</button>
                </div>
            </div>
        </div>
    );
}

export default App;
