import React, { useContext, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import HomePageAction from '../components/HomePageAction';
import NotesList from '../components/NotesList';
import NotesListEmpty from '../components/NotesListEmpty';
import SearchBar from '../components/SearchBar';
import LocaleContext from '../contexts/LocaleContext';
import { getActiveNotes } from '../utils/network-data';

const HomePage = () => {
  const { locale } = useContext(LocaleContext);

  const [searchParams, setSearchParams] = useSearchParams();

  const [notes, setNotes] = useState([]);
  const [keyword, setKeyword] = useState(() => {
    return searchParams.get('keyword') || '';
  });

  const onKeywordChangeHandler = () => {
    setKeyword(keyword);
    setSearchParams({ keyword });
  };

  useEffect(() => {
    const fetchGetNotes = async () => {
      try {
        const { data } = await getActiveNotes();
        setNotes(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchGetNotes();
  }, []);

  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(keyword.toLowerCase());
  });

  return (
    <section className="homepage">
      <h2>{locale === 'id' ? 'Catatan Aktif' : 'Active Note'}</h2>
      <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
      {filteredNotes.length !== 0 ? (
        <NotesList notes={filteredNotes} />
      ) : (
        <NotesListEmpty />
      )}
      <HomePageAction />
    </section>
  );
};

export default HomePage;
