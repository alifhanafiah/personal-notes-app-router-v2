import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Swal from 'sweetalert2';

const RegisterInput = ({ register }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    password === confirmPassword
      ? register({ name, email, password })
      : Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Password and password confirm must be same.',
        });
  };

  return (
    <form onSubmit={onSubmitHandler} className="input-register">
      <label htmlFor="nama">Name</label>
      <input id="nama" type="text" value={name} onChange={onNameChange} />

      <label htmlFor="email">Email</label>
      <input id="email" type="email" value={email} onChange={onEmailChange} />

      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        value={password}
        onChange={onPasswordChange}
      />

      <label htmlFor="confirmPassword">Confirm Password</label>
      <input
        id="confirmPassword"
        type="password"
        value={confirmPassword}
        onChange={onConfirmPasswordChange}
      />

      <button>Register</button>
    </form>
  );
};

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
