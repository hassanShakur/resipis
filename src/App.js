// * ======= Third Party Components ======= */
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

//? ======== Local Components ========== */
// import SearchResultsDisplay from './pages/SearchResultsDisplay';
import AllSuggestions from './pages/AllSuggestions';
import Tutorial from './pages/Tutorial';
import Profile from './pages/Profile';
import Search from './pages/Search';
import About from './pages/About';
import Home from './pages/Home';

//! ======== Styles ========== */
import './styles/master.scss';

function App() {
  // App theme from redux
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
        {/* <Route
          path='/search/:searchType/:recipe'
          exact
          element={<SearchResultsDisplay />}
        /> */}
        <Route
          path='/search/:searchType/:recipe/:recipeId'
          exact
          element={<Tutorial />}
        />
        <Route path='/profile' exact element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
