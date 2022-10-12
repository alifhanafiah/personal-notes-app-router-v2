import PropTypes from 'prop-types';
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import NotesList from '../components/NotesList';
import NotesListEmpty from '../components/NotesListEmpty';
import SearchBar from '../components/SearchBar';
import { getArchivedNotes } from '../utils/local-data';

function ArchivePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();

  const keyword = searchParams.get('keyword');

  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return (
    <ArchivePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
  );
}

class ArchivePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getArchivedNotes(),
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
        <h2>Catatan Arsip</h2>
        <SearchBar
          keyword={this.state.keyword}
          keywordChange={this.onKeywordChangeHandler}
        />
        {filteredNotes.length !== 0 ? (
          <NotesList notes={filteredNotes} />
        ) : (
          <NotesListEmpty />
        )}
      </section>
    );
  }
}

ArchivePage.propTypes = {
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func.isRequired,
};

export default ArchivePageWrapper;
