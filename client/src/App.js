// * ======= Third Party Components ======= */
import React, { Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

//! ======== Styles ========== */
import './styles/master.scss';
import { authActions } from './store/auth-slice';
import { LOCAL_SERVER_URL } from './config/config';
import Spinner from './components/UI/Spinner';

//? ======== Local Components ========== */
// const Bookmarks = React.lazy(() =>
//   import('./components/Profile/AllBookmarks/Bookmarks')
// );
const SearchResultsDisplay = React.lazy(() =>
  import('./pages/SearchResultsDisplay')
);
const PageError = React.lazy(() =>
  import('./components/Error/PageError')
);
const AllSuggestions = React.lazy(() =>
  import('./pages/AllSuggestions')
);
const Tutorial = React.lazy(() => import('./pages/Tutorial'));
// const Security = React.lazy(() => import('./auth/Security'));
// const Profile = React.lazy(() => import('./pages/Profile'));
const Search = React.lazy(() => import('./pages/Search'));
const About = React.lazy(() => import('./pages/About'));
const Home = React.lazy(() => import('./pages/Home'));

function App() {
  const dispatch = useDispatch();
  // Axios to send cookies automatically
  axios.defaults.withCredentials = true;
  let auth = useSelector((state) => state.auth);
  const userId = auth.user.id;

  // Configure auth status from backend
  // useEffect(() => {
  //   axios
  //     .get('http://localhost:7000/api/authstatus')
  //     .then(({ data }) => {
  //       dispatch(authActions.login(data.user));
  //     })
  //     .catch((err) => console.log('auth error'));
  // }, [dispatch]);

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
      {/* <Security> */}
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/home' element={<Home />} />

            <Route path='/search'>
              <Route path='' exact element={<Search />} />
              <Route path=':recipeId' element={<Tutorial />} />

              <Route
                path='suggestions'
                element={<AllSuggestions />}
              />
              <Route
                path=':searchType/:recipe'
                element={<SearchResultsDisplay />}
              />
              <Route
                path=':searchType/:recipe/:recipeId'
                element={<Tutorial />}
              />
            </Route>

            {/* <Route path='/profile'>
              <Route path='' exact element={<Profile />} />
              <Route path='bookmarks' element={<Bookmarks />} />
            </Route> */}

            <Route path='/about' element={<About />} />

            <Route path='*' element={<PageError />} />
          </Routes>
        </Suspense>
      {/* </Security> */}
    </div>
  );
}

export default App;
