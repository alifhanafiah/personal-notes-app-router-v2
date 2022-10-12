import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import AddNewPage from './pages/AddNewPage';
import ArchivePage from './pages/ArchivePage';
import DetailPage from './pages/DetailPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  const home = '/';
  const archives = '/archives';
  const add = '/notes/new';
  const detail = '/notes/:id';
  const notFound = '*';

  return (
    <div className="app-container">
      <header>
        <h1>
          <Link to="/">Aplikasi Catatan</Link>
        </h1>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path={home} element={<HomePage />} />
          <Route path={archives} element={<ArchivePage />} />
          <Route path={add} element={<AddNewPage />} />
          <Route path={detail} element={<DetailPage />} />
          <Route path={notFound} element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
