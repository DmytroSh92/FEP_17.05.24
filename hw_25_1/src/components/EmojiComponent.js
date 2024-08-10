import React, {Component, useState} from "react";
import "./EmojiComponent.css"

class EmojiComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: props.count,
        };
    }

    componentDidMount() {
        const storedData = localStorage.getItem('emojiData');
        if (storedData) {
            const emojiData = JSON.parse(storedData);
            const emoji = emojiData.find((e) => e.id === this.props.id);
            if (emoji) {
                this.setState({count: emoji.count});
            }
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.count !== this.props.count) {
            this.setState({count: this.props.count});
        }
    }

    increment = () => {
        const storedData = localStorage.getItem('emojiData');
        if (storedData) {
            const emojiData = JSON.parse(storedData);
            const emoji = emojiData.find((e) => e.id === this.props.id);

            if (emoji) {
                emoji.count += 1;
                localStorage.setItem('emojiData', JSON.stringify(emojiData));
                this.setState({count: emoji.count});
            }
        }
    };

    render() {
        return (
            <div>
                <button onClick={this.increment} className={"img-button"}>
                    <img src={this.props.src} alt={"emoji"} className={"app-img"}/>
                </button>
                <p className={"img-count"}>{this.state.count}</p>
            </div>
        );
    }
}

export default EmojiComponent;