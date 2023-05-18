import PropTypes from 'prop-types';
import css from './Search.module.css';

const Search = ({ inputValue, searchHandler }) => {
  return (
    <form className={css.searchForm} onSubmit={searchHandler}>
      <input type="text" name="query" defaultValue={inputValue} />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;

Search.propTypes = {
  inputValue: PropTypes.string,
  searchHandler: PropTypes.func.isRequired,
};
