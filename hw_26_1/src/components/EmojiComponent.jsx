import "./EmojiComponent.css";

function EmojiComponent({increment, id, src, count}) {

    function handleIncrement() {
        increment(id);
    }

    return (
        <div>
            <button onClick={handleIncrement} className={"img-button"}>
                <img src={src} alt={"emoji"} className={"app-img"}/>
            </button>
            <p className={"img-count"}>{count}</p>
        </div>
    );
}

export default EmojiComponent;
