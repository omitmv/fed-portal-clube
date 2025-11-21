import { GlobalProvider } from '../../../core/context/globalContext';
import { Routes, Route, Link } from 'react-router-dom';
import Home from '../../Home';
import About from '../../About';
import '../App.css';

function App() {
  return (
    <GlobalProvider>
      <nav style={{ marginBottom: 20 }}>
        <Link to="/" style={{ marginRight: 10 }}>Home</Link>
        <Link to="/about">Sobre</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </GlobalProvider>
  );
}

export default App
