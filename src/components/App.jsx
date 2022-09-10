import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Searchbar from './Searchbar/Searchbar';
import Navigation from './Navigation/Navigation';
import BackButton from './BackButton/BackButton';

const HomePage = lazy(() => import('../pages/Homepage/Homepage'));

export const App = () => {
  return (
    <>
      <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101',
      // }}
      >
        <Searchbar />
        <Navigation />
        <BackButton />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </>
  );
};
