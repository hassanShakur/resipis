import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Tutorial from './pages/Tutorial';
import Discover from './pages/Discover';
import Search from './pages/Search';
import About from './pages/About';

import './styles/master.scss';
import { useSelector } from 'react-redux';
import Profile from './pages/Profile';
import SearchResultsDisplay from './pages/SearchResultsDisplay';
import AllSuggestions from './pages/AllSuggestions';

function App() {
  const theme = useSelector((state) => state.theme.currTheme);
  return (
    <div className={`App theme-${theme}`}>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/search' exact element={<Search />} />
        <Route path='/about' exact element={<About />} />
        <Route
          path='/search/:recipeId'
          exact
          element={<Tutorial />}
        />
        <Route
          path='/search/suggestions'
          exact
          element={<AllSuggestions />}
        />
        <Route
          path='/search/:searchType/:recipe'
          exact
          element={<SearchResultsDisplay />}
        />
        <Route
          path='/search/:searchType/:recipe/:recipeId'
          exact
          element={<Tutorial />}
        />
        <Route path='/discover' exact element={<Discover />} />
        <Route path='/profile' exact element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
