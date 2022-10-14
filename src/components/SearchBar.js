import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import LocaleContext from '../contexts/LocaleContext';

const SearchBar = ({ keyword, keywordChange }) => {
  const { locale } = useContext(LocaleContext);

  return (
    <section className="search-bar">
      <input
        type="text"
        placeholder={
          locale === 'id' ? 'Cari berdasarkan judul ...' : 'Search by title ...'
        }
        value={keyword}
        onChange={(e) => keywordChange(e.target.value)}
      />
    </section>
  );
};

SearchBar.propType = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default SearchBar;
