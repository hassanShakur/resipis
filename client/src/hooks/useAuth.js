import { useState } from 'react';
import axios from 'axios';

const useAuth = (authType) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [name, setName] = useState('');
  let formIsValid = false;

  const emailChangeHandler = (e) => setEmail(() => e.target.value);
  const nameChangeHandler = (e) => setName(() => e.target.value);
  const passwordChangeHandler = (e) =>
    setPassword(() => e.target.value);
  const passwordConfirmChangeHandler = (e) =>
    setPasswordConfirm(() => e.target.value);

  const loginClickHandler = async (e) => {
    e.preventDefault();
    if (!formIsValid) return;
    try {
      const res = await axios.post(
        'http://localhost:7000/api/users/login',
        {
          email,
          password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log(res);
    } catch (err) {
      console.log(err.response.data.message);
    }
  };

  const signupClickHandler = async (e) => {
    e.preventDefault();
    if (!formIsValid) return;

    try {
      const res = await axios.post(
        'http://localhost:7000/api/users/signup',
        {
          name,
          email,
          password,
          passwordConfirm,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log(res);
    } catch (err) {
      console.log(err.response.data.message);
    }
  };

  let state;
  let handlers;

  if (authType === 'login') {
    if (password.length > 5 && email.length > 0) formIsValid = true;
    state = {
      email,
      password,
      formIsValid,
    };
    handlers = {
      emailChangeHandler,
      passwordChangeHandler,
      loginClickHandler,
    };
  } else if (authType === 'signup') {
    if (password.length > 5 && email.length > 0 && name.length > 0)
      formIsValid = true;

    state = {
      email,
      password,
      name,
      passwordConfirm,
      formIsValid,
    };
    handlers = {
      emailChangeHandler,
      nameChangeHandler,
      passwordChangeHandler,
      passwordConfirmChangeHandler,
      signupClickHandler,
    };
  }

  return {
    state,
    handlers,
  };
};

export default useAuth;
