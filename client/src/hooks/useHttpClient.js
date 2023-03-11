import axios from 'axios';
import { useState } from 'react';
import { LOCAL_SERVER_URL } from '../config/config';

const useHttpClient = (path, method, data, formIsValid = true) => {
  const url = `${LOCAL_SERVER_URL}/${path}`;
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({});
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

      console.log(res);
    } catch (err) {
      setError(() => err);
      throw err.response.data.message;
    }

    setIsLoading(() => false);
  };
  return { sendRequest, isLoading, error };
};

export default useHttpClient;
