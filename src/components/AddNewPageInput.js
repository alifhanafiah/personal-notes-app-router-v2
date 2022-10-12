import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { GrCheckmark } from 'react-icons/gr';

const AddNewPageInput = ({ addNote }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const onChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const onInputHandler = (e) => {
    setBody(e.target.innerHTML);
  };

  const onClickHandler = () => {
    addNote({ title, body });
  };

  return (
    <>
      <div className="add-new-page__input">
        <input
          className="add-new-page__input__title"
          placeholder="Catatan rahasia"
          value={title}
          onChange={onChangeHandler}
        />
        <div
          className="add-new-page__input__body"
          data-placeholder="Sebenarnya saya adalah ...."
          contentEditable="true"
          onInput={onInputHandler}
        ></div>
      </div>
      <div className="add-new-page__action">
        <button
          className="action"
          type="button"
          title="Simpan"
          onClick={onClickHandler}
        >
          <GrCheckmark />
        </button>
      </div>
    </>
  );
};

AddNewPageInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default AddNewPageInput;
