import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ReactQuery from './pages/ReactQueryPage';
function App() {
    return (
        <div className="App">
            <nav style={{ backgroundColor: 'beige', padding: '20px' }}>
                <Link to="/" style={{ marginRight: '10px' }}>
                    HomePage
                </Link>
                <Link to="/react-query">React Query</Link>
            </nav>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="react-query" element={<ReactQuery />} />
            </Routes>
        </div>
    );
}

export default App;
