import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';
import SWAPIPage from './components/SWAPIPage';
import { Container } from '@mui/material';
import TodoPage from "./components/TodoPage";
import Resume from "./components/Resume";

const App = () => {
    return (
        <Router>
            <Header />
            <Container style={{ minHeight: '80vh', padding: '20px' }}>
                <Routes>
                    <Route path="/" element={<Resume />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/swapi" element={<SWAPIPage />} />
                    <Route path="/todos" element={<TodoPage />} />
                </Routes>
            </Container>
            <Footer />
        </Router>
    );
};

export default App;