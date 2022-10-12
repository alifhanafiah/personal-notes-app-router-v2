import React from 'react';
import { useNavigate } from 'react-router-dom';
import AddNewPageInput from '../components/AddNewPageInput';
import { addNote } from '../utils/local-data';

function AddNewPage() {
  const navigate = useNavigate();

  const onAddNoteHandler = (note) => {
    addNote(note);
    navigate('/');
  };

  return (
    <div className="add-new-page">
      <AddNewPageInput addNote={onAddNoteHandler} />
    </div>
  );
}

export default AddNewPage;
