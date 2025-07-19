import React from 'react';
import { LibraryProvider } from './context/LibraryContext';
import { MainPage } from './pages/MainPage';

function App() {
  return (
    <LibraryProvider>
      <MainPage />
    </LibraryProvider>
  );
}

export default App;