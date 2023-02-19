import { Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './pages/Home';
import Tutorial from './pages/Tutorial';
import Footer from './components/Footer/Footer';
import Discover from './pages/Discover';

import './styles/master.scss';
import About from './pages/About';

function App() {
  return (
    <div className='App theme-dark'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/recipe/tutorial' element={<Tutorial />} />
        <Route path='/discover' element={<Discover />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
