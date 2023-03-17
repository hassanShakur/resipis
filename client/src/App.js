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
import Home from './pages/Home';

//! ======== Styles ========== */
import './styles/master.scss';
import { useEffect } from 'react';
import { authActions } from './store/auth-slice';
import { LOCAL_SERVER_URL } from './config/config';
import Bookmarks from './components/Profile/AllBookmarks/Bookmarks';
import Security from './auth/Security';

function App() {
  const dispatch = useDispatch();
  // Axios to send cookies automatically
  axios.defaults.withCredentials = true;
  let auth = useSelector((state) => state.auth);
  const userId = auth.user.id;

  // Configure auth status from backend
  useEffect(() => {
    axios
      .get('http://localhost:7000/api/authstatus')
      .then(({ data }) => {
        dispatch(authActions.login(data.user));
      })
      .catch((err) => console.log('auth error'));
  }, [dispatch]);

  // Set bookmarks
  useEffect(() => {
    if (!userId) return;
    axios
      .get(`${LOCAL_SERVER_URL}/api/users/${userId}/bookmarks`)
      .then(({ data }) => {
        dispatch(authActions.setBookmarks(data.data.bookmarks));
      });
  }, [dispatch, userId]);

  // App theme from redux
  const theme = useSelector((state) => state.theme.currTheme);

  return (
    <div className={`App theme-${theme}`}>
      <Security>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/home' element={<Home />} />
          {/* <Route path='/login' element={<Navigate to='/' replace />} />
        <Route path='/signup' element={<Navigate to='/' replace />} /> */}
          <Route path='/search'>
            <Route path='' exact element={<Search />} />
            <Route path=':recipeId' element={<Tutorial />} />

            <Route path='suggestions' element={<AllSuggestions />} />
            <Route
              path=':searchType/:recipe'
              element={<SearchResultsDisplay />}
            />
            <Route
              path=':searchType/:recipe/:recipeId'
              element={<Tutorial />}
            />
          </Route>

          <Route path='/profile'>
            <Route path='' exact element={<Profile />} />
            <Route path='bookmarks' element={<Bookmarks />} />
          </Route>

          <Route path='/about' element={<About />} />
          {/* <Route path='/login' element={<Navigate to='/' />} />
          <Route path='/signup' element={<Navigate to='/' />} /> */}
          <Route path='*' element={<PageError />} />
        </Routes>
      </Security>
      {/* <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes> */}
    </div>
  );
}

export default App;
