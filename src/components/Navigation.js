import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to="/archives">Terarsip</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
