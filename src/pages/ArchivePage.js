import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import NotesList from '../components/NotesList';
import NotesListEmpty from '../components/NotesListEmpty';
import SearchBar from '../components/SearchBar';
import { getArchivedNotes } from '../utils/local-data';

function ArchivePage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [notes, setNotes] = useState(getArchivedNotes());
  const [keyword, setKeyword] = useState(() => {
    return searchParams.get('keyword');
  });

  const onKeywordChangeHandler = () => {
    setKeyword(keyword);
    setSearchParams({ keyword });
  };

  // useEffect(() => {
  //   const data = getArchivedNotes();
  //   setNotes(...data);
  //   console.log(data);
  //   console.log(notes);
  // }, []);

  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(keyword.toLowerCase());
  });

  return (
    <section className="archives-page">
      <h2>Catatan Arsip</h2>
      <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
      {filteredNotes.length !== 0 ? (
        <NotesList notes={filteredNotes} />
      ) : (
        <NotesListEmpty />
      )}
    </section>
  );
}

export default ArchivePage;
