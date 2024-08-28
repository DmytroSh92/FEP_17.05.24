import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import {Navbar, Nav, Container} from 'react-bootstrap';
import {ThemeProvider, useTheme} from './context/ThemeContext';
import ThemeSwitcher from './components/ThemeSwitcher';
import Home from './page/Home';
import Contact from './page/Contact';
import About from './page/About';
import NotFound from './page/NotFound';
import {TaskProvider} from "./context/TaskContext.jsx";
import './App.css';
import ErrorBoundary from "./ErrorBoundary.jsx";

const AppContent = () => {
    const { isDarkMode } = useTheme();

    return (
        <Container className={isDarkMode ? 'dark-theme' : 'light-theme'}>
            <Navbar.Brand as={Link} to="/">SPA App</Navbar.Brand>
            <Navbar bg={isDarkMode ? 'dark' : 'light'} variant={isDarkMode ? 'dark' : 'light'}>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/">Головна</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Контакти</Nav.Link>
                        <Nav.Link as={Link} to="/about">Про мене</Nav.Link>
                        <ThemeSwitcher />
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Container>
    );
};

const App = () => {
    return (
        <ThemeProvider>
            <TaskProvider>
                <BrowserRouter>
                    <ErrorBoundary>
                        <AppContent/>
                    </ErrorBoundary>
                </BrowserRouter>
            </TaskProvider>
        </ThemeProvider>
    );
};

export default App;
