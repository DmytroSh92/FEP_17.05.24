import './App.css';
import React, { useEffect, useState } from "react";
import { DataEmojis } from "./data/Emojis";
import EmojiComponent from "./components/EmojiComponent";
import ResultsComponent from "./components/ResultsComponent";

function App() {
    const [isVisible, setIsVisible] = useState(false);
    const [emojis, setEmojis] = useState([]);

    useEffect(() => {
        const storedData = localStorage.getItem('emojiData');
        if (!storedData) {
            localStorage.setItem('emojiData', JSON.stringify(DataEmojis));
        }

        setEmojis(JSON.parse(localStorage.getItem('emojiData')));
    }, []);

    const handleResult = () => {
        setIsVisible(!isVisible);
    };

    const incrementCount = (id) => {
        const updatedEmojis = emojis.map(emoji => {
            if (emoji.id === id) {
                emoji.count += 1;
            }
            return emoji;
        });
        setEmojis(updatedEmojis);
        localStorage.setItem('emojiData', JSON.stringify(updatedEmojis));
    };

    const resetCounters = () => {
        const resetEmojis = DataEmojis.map(emoji => ({ ...emoji, count: 0 }));
        setEmojis(resetEmojis);
        localStorage.setItem('emojiData', JSON.stringify(resetEmojis));
        setIsVisible(false);
    };

    return (
        <div className={"container"}>
            <h1>Голосування за найкращий смайлик</h1>
            <div className="App">
                {emojis.map((emoji) => (
                    <EmojiComponent key={emoji.id} id={emoji.id} src={emoji.src} count={emoji.count} increment={incrementCount} />
                ))}
            </div>
            <div>
                <button onClick={handleResult} className={"result-button"}>Show Results</button>
                {isVisible && <ResultsComponent emojis={emojis} />}
                <div>
                    <button onClick={resetCounters} className={"result-button reset-button"}>Reset Results</button>
                </div>
            </div>
        </div>
    );
}

export default App;
