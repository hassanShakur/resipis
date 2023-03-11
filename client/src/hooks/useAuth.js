import { useState } from 'react';

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
    };
  } else if (authType === 'signup') {
    if (
      password.length > 5 &&
      passwordConfirm.length > 5 &&
      email.length > 0 &&
      name.length > 0
    )
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
    };
  }

  return {
    state,
    handlers,
  };
};

export default useAuth;
