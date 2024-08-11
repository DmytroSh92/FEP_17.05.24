import React, { Component } from 'react';

class ResultsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            winners: [],
        };
    }

    componentDidMount() {
        this.calculateWinners();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.emojis !== this.props.emojis) {
            this.calculateWinners();
        }
    }

    calculateWinners = () => {
        const { emojis } = this.props;
        const maxCount = emojis.reduce((max, emoji) => emoji.count > max ? emoji.count : max, 0);
        const winners = emojis.filter(emoji => emoji.count === maxCount);
        this.setState({ winners });
    };

    render() {
        const { winners } = this.state;

        return (
            <div className="container">
                <h2>Результати голосування:</h2>
                <div className="App result-block">
                    {winners.map((winner, index) => (
                        <div key={index}>
                            <h3>Переможець:</h3>
                            <img src={winner.src} alt="emoji" className="app-img" />
                            <p className="img-count">Кількість голосів: {winner.count}</p>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default ResultsComponent;
