import React from 'react';
import { Button } from 'react-bootstrap';
import { useTheme } from '../context/ThemeContext';
import './../App.css';

const ThemeSwitcher = () => {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <Button onClick={toggleTheme} variant={isDarkMode ? 'light' : 'dark'}>
            {isDarkMode ? 'Світла тема' : 'Темна тема'}
        </Button>
    );
};

export default ThemeSwitcher;