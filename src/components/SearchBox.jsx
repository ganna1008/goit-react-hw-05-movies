import PropTypes from 'prop-types';
import { SearchForm, Input, Icon, SearchButton } from './SearchBox.styled';

export const SearchBox = ({ onSubmit }) => {
  return (
    <SearchForm onSubmit={onSubmit}>
      <SearchButton type="submit">
        <Icon>Search</Icon>
      </SearchButton>

      <Input
        name="input"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
      />
    </SearchForm>
  );
};

SearchBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
