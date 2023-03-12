// * ======= Third Party Components ======= */
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

//? ======== Local Components ========== */
import SearchResultsDisplay from './pages/SearchResultsDisplay';
import PageError from './components/Error/PageError';
import AllSuggestions from './pages/AllSuggestions';
import Tutorial from './pages/Tutorial';
import Profile from './pages/Profile';
import Search from './pages/Search';
import About from './pages/About';
import Login from './auth/Login';
import Home from './pages/Home';

//! ======== Styles ========== */
import './styles/master.scss';
import Signup from './auth/Signup';
import { useEffect } from 'react';
import { authActions } from './store/auth-slice';

function App() {
  const dispatch = useDispatch();
  // Axios to send cookies automatically
  axios.defaults.withCredentials = true;

  // Configure auth status from backend
  useEffect(() => {
    axios
      .get('http://localhost:7000/api/authstatus')
      .then(({ data }) => {
        dispatch(authActions.login(data.user));
      })
      .catch((err) => console.log(err));
  }, [dispatch]);

  // App theme from redux
  const theme = useSelector((state) => state.theme.currTheme);

  return (
    <div className={`App theme-${theme}`}>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/login' exact element={<Login />} />
        <Route path='/signup' exact element={<Signup />} />
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
        <Route path='/profile' exact element={<Profile />} />
        <Route path='*' element={<PageError />} />
      </Routes>
    </div>
  );
}

export default App;
