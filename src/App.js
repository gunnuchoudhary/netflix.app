import './App.css';
import Home from './Components/Home/Home';
import Header from './Components/Header';
import TvShow from './Components/TvShow/Tv_Show';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/tvShows' element={<TvShow />} />
                <Route path='/movies' element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
