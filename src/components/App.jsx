import Searchbar from './Searchbar/Searchbar';
import Navigation from './Navigation/Navigation';
import BackButton from './BackButton/BackButton';

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
      </div>
    </>
  );
};
