import PropTypes from 'prop-types';
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import HomePageAction from '../components/HomePageAction';
import NotesList from '../components/NotesList';
import NotesListEmpty from '../components/NotesListEmpty';
import SearchBar from '../components/SearchBar';
import { getActiveNotes } from '../utils/local-data';

function HomePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();

  const keyword = searchParams.get('keyword');

  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return (
    <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
  );
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getActiveNotes(),
      keyword: props.defaultKeyword || '',
    };
  }

  onKeywordChangeHandler = (keyword) => {
    this.setState({
      keyword,
    });

    this.props.keywordChange(keyword);
  };

  render() {
    const filteredNotes = this.state.notes.filter((note) => {
      return note.title
        .toLowerCase()
        .includes(this.state.keyword.toLowerCase());
    });

    return (
      <section className="homepage">
        <h2>Catatan Aktif</h2>
        <SearchBar
          keyword={this.state.keyword}
          keywordChange={this.onKeywordChangeHandler}
        />
        {filteredNotes.length !== 0 ? (
          <NotesList notes={filteredNotes} />
        ) : (
          <NotesListEmpty />
        )}
        <HomePageAction />
      </section>
    );
  }
}

HomePage.propTypes = {
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func.isRequired,
};

export default HomePageWrapper;
