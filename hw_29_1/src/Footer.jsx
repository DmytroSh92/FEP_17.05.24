import React from 'react';
import { useDispatch } from 'react-redux';
import { clearTodos  } from './actions/Action';

const Footer = () => {
    const dispatch = useDispatch();

    const handleClearTodos = () => {
        dispatch(clearTodos ());
    };

    return (
        <footer>
            <button onClick={handleClearTodos}>Clear TODO</button>
        </footer>
    );
};

export default Footer;