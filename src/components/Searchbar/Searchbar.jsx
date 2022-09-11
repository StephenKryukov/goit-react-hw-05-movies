import { useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import style from './Searchbar.module.css';

const Searchbar = ({ onSearch }) => {
  const [searchRequest, setSearchRequest] = useState('');

  const handleRequestChange = event => {
    setSearchRequest(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (searchRequest.trim() === '') {
      return toast.warning('Search field is empty!');
    }
    onSearch(searchRequest);
    setSearchRequest('');
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <button type="submit" className={style.SearchForm_button}>
          Search
        </button>

        <input
          className={style.SearchForm_input}
          type="text"
          name="searchRequest"
          value={searchRequest}
          onChange={handleRequestChange}
          autoComplete="off"
          autoFocus
          placeholder="Enter your search request"
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Searchbar;
