import './App.css';
import React, {Component} from "react";
import { DataEmojis } from "./data/Emojis";
import EmojiComponent from "./components/EmojiComponent";
import ResultsComponent from "./components/ResultsComponent";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isVisible: false,
            emojis: [],
        };
    }

    componentDidMount() {
        const storedData = localStorage.getItem('emojiData');
        if (!storedData) {
            localStorage.setItem('emojiData', JSON.stringify(DataEmojis));
        }

        this.setState({
            emojis: JSON.parse(localStorage.getItem('emojiData')),
        });
    }

    handleResult = () => {
        this.setState((prevState) => ({
            isVisible: !prevState.isVisible,
        }));
    };

    incrementCount = (id) => {
        const updatedEmojis = this.state.emojis.map(emoji => {
            if (emoji.id === id) {
                emoji.count += 1;
            }
            return emoji;
        });
        this.setState({emojis: updatedEmojis});
        localStorage.setItem('emojiData', JSON.stringify(updatedEmojis));
    };

    resetCounters = () => {
        const resetEmojis = DataEmojis.map(emoji => ({...emoji, count: 0}));
        localStorage.setItem('emojiData', JSON.stringify(resetEmojis));
        this.setState({emojis: resetEmojis, isVisible: false});
    };

    render() {
        return (
            <div className={"container"}>
                <h1>Голосування за найкращий смайлик</h1>
                <div className="App">
                    {this.state.emojis.map((emoji) => (
                        <EmojiComponent key={emoji.id} id={emoji.id} src={emoji.src} count={emoji.count}
                                        increment={this.incrementCount}/>
                    ))}
                </div>
                <div>
                    <button onClick={this.handleResult} className={"result-button"}>Show Results</button>
                    {this.state.isVisible && <ResultsComponent emojis={this.state.emojis}/>}
                    <div>
                        <button onClick={this.resetCounters} className={"result-button reset-button"}>Reset Results</button>
                    </div>
                </div>
            </div>
        );
    }
}
export default App;
