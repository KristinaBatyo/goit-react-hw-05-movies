import { SearchStyled } from './MoviesSearch.styled';
import { useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

const SearchMovies = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      toast('Enter the name of the picture!');
      return;
    }
    onSubmit(query);
  };
  return (
    <>
      <SearchStyled onSubmit={handleSubmit}>
        <input name="name" type="text" value={query} onChange={handleChange} />
        <button type="submit">Search</button>
      </SearchStyled>
    </>
  );
};
export default SearchMovies;

SearchMovies.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
