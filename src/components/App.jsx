import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Searchbar from './Searchbar/Searchbar';
import Navigation from './Navigation/Navigation';
import BackButton from './BackButton/BackButton';

const HomePage = lazy(() => import('../pages/Homepage/Homepage'));
const MovieDetailsPage = lazy(() =>
  import('../pages/MovieDetailsPage/MovieDetailsPage')
);

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
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}></Route>
        </Routes>
      </div>
    </>
  );
};
