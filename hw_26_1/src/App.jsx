import './App.css';
import React, {useState} from "react";
import EmojiComponent from "./components/EmojiComponent";
import ResultsComponent from "./components/ResultsComponent";
import useEmojiCounter from "./hooks/useEmojiCounter";

function App() {
    const [isVisible, setIsVisible] = useState(false);
    const {emojis, incrementCount, resetCounters} = useEmojiCounter();

    const handleResult = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className={"container"}>
            <h1>Голосування за найкращий смайлик</h1>
            <div className="App">
                {emojis.map((emoji) => (
                    <EmojiComponent key={emoji.id} id={emoji.id} src={emoji.src} count={emoji.count}
                                    increment={incrementCount}/>
                ))}
            </div>
            <div>
                <button onClick={handleResult} className={"result-button"}>Show Results</button>
                {isVisible && <ResultsComponent emojis={emojis}/>}
                <div>
                    <button onClick={resetCounters} className={"result-button reset-button"}>Reset Results</button>
                </div>
            </div>
        </div>
    );
}

export default App;