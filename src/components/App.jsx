import Searchbar from './Searchbar/Searchbar';
import Navigation from './Navigation/Navigation';

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
      </div>
    </>
  );
};
