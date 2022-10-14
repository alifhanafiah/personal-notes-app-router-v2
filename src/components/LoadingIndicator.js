import React, { useContext } from 'react';
import LocaleContext from '../contexts/LocaleContext';

const LoadingIndicator = () => {
  const { locale } = useContext(LocaleContext);

  return (
    <p className="text-loading">
      {locale === 'id' ? 'Memuat Catatan ...' : 'Fetching notes ...'}
    </p>
  );
};

export default LoadingIndicator;
