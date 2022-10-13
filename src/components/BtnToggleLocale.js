import React from 'react';
import { MdTranslate } from 'react-icons/md';

const BtnToggleLocale = () => {
  return (
    <button className="toggle-locale" type="button">
      <MdTranslate />
    </button>
  );
};

export default BtnToggleLocale;
