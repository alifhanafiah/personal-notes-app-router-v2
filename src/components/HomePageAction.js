import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function HomePageAction() {
  return (
    <div className="homepage__action">
      <Link to="/notes/new">
        <button className="action" type="button" title="Tambah">
          <AiOutlinePlus />
        </button>
      </Link>
    </div>
  );
}

export default HomePageAction;
