import React, { useContext } from 'react';
import LocaleContext from '../contexts/LocaleContext';

const NotesListEmpty = () => {
  const { locale } = useContext(LocaleContext);

  return (
    <section className="notes-list-empty">
      <p className="notes-list__empty">
        {locale === 'id' ? 'Tidak ada catatan' : 'No notes'}
      </p>
    </section>
  );
};

export default NotesListEmpty;
