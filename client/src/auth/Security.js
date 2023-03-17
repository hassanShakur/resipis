import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';

const Security = ({ children }) => {
  let isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <React.Fragment>
      {isLoggedIn ? (
        children
      ) : (
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='*' element={<Login />} />
          {/* <Route
            path='*'
            element={<Navigate to='/login' replace />}
          /> */}
        </Routes>
      )}
    </React.Fragment>
  );
};

export default Security;
