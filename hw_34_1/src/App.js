import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import About from './pages/About';
import Hotels from './pages/Hotels';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/hotels" element={<Hotels />} />
        </Routes>
        <Footer />
      </Router>
  );
}

export default App;