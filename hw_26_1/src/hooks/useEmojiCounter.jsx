import {useState, useEffect} from "react";
import {DataEmojis} from "../data/Emojis";

function useEmojiCounter() {
    const [emojis, setEmojis] = useState([]);

    useEffect(() => {
        const storedData = localStorage.getItem('emojiData');
        if (!storedData) {
            localStorage.setItem('emojiData', JSON.stringify(DataEmojis));
        }

        setEmojis(JSON.parse(localStorage.getItem('emojiData')));
    }, []);

    const incrementCount = (id) => {
        const updatedEmojis = emojis.map(emoji => {
            if (emoji.id === id) {
                return {...emoji, count: emoji.count + 1};
            }
            return emoji;
        });
        setEmojis(updatedEmojis);
        localStorage.setItem('emojiData', JSON.stringify(updatedEmojis));
    };

    const resetCounters = () => {
        const resetEmojis = DataEmojis.map(emoji => ({...emoji, count: 0}));
        setEmojis(resetEmojis);
        localStorage.setItem('emojiData', JSON.stringify(resetEmojis));
    };

    return {
        emojis,
        incrementCount,
        resetCounters
    };
}

export default useEmojiCounter;