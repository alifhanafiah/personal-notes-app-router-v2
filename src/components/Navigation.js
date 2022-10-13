import PropTypes from 'prop-types';
import React from 'react';
import { HiOutlineLogout } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Navigation = ({ logout, name }) => {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to="/archives">Terarsip</Link>
        </li>
        <li>
          <button onClick={logout} style={btnStyle}>
            <HiOutlineLogout /> {name}
          </button>
        </li>
      </ul>
    </nav>
  );
};

const btnStyle = {
  backgroundColor: 'transparent',
  color: 'white',
  border: 'none',
  fontSize: '24px',
  margin: '0 8px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
};

Navigation.propTypes = {
  logout: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default Navigation;
