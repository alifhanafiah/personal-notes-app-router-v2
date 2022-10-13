import PropTypes from 'prop-types';
import React from 'react';
import { HiOutlineLogout } from 'react-icons/hi';

const BtnLogout = ({ logout, name }) => {
  return (
    <button onClick={logout} className="button-logout" type="button">
      <HiOutlineLogout /> {name}
    </button>
  );
};

BtnLogout.propTypes = {
  logout: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default BtnLogout;
