import PropTypes from 'prop-types';
import React, { useState } from 'react';

const LoginInput = ({ login }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onEmailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const onPasswordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    login({ email, password });
  };

  return (
    <form onSubmit={onSubmitHandler} className="input-login">
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={onEmailChangeHandler}
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        value={password}
        onChange={onPasswordChangeHandler}
      />
      <button>Masuk</button>
    </form>
  );
};

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
