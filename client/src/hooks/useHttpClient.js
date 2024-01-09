import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LOCAL_SERVER_URL } from '../config/config';
import { authActions } from '../store/auth-slice';

const useHttpClient = (path, method, data, formIsValid = true) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const url = `${LOCAL_SERVER_URL}/api/${path}`;
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const headers = path.includes('signup')
    ? {
        'Content-Type': 'multipart/form-data',
      }
    : {
        'Content-Type': 'application/json',
      };

  const sendRequest = async () => {
    if (!formIsValid) return;
    try {
      setIsLoading(() => true);
      const res = await axios({
        url,
        method,
        data,
        headers,
      });

      setIsLoading(() => false);
      const resData = res.data;
      if (!resData) return;
      dispatch(authActions.login(resData.user));
      navigate('/');
    } catch (err) {
      setError(() => err.response?.data?.message);
      console.log(err);

      setIsLoading(() => false);
      throw err.response.data.message;
    }
  };
  return { sendRequest, isLoading, error };
};

export default useHttpClient;
