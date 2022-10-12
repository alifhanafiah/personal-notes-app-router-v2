import PropTypes from 'prop-types';
import React from 'react';
import NoteItem from './NoteItem';

function NotesList({ notes }) {
  return (
    <section className="notes-list">
      {notes.map((note) => {
        return <NoteItem key={note.id} {...note} />;
      })}
    </section>
  );
}

NotesList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object),
};
export default NotesList;
