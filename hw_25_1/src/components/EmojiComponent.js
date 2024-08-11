import React, {Component} from "react";
import "./EmojiComponent.css"

class EmojiComponent extends Component {

    increment = () => {
        this.props.increment(this.props.id);
    };

    render() {
        const { src, count } = this.props;

        return (
            <div>
                <button onClick={this.increment} className={"img-button"}>
                    <img src={src} alt={"emoji"} className={"app-img"}/>
                </button>
                <p className={"img-count"}>{count}</p>
            </div>
        );
    }
}

export default EmojiComponent;
