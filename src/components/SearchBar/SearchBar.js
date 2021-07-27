import './SearchBar.css';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import useStyles from '../../util/materialUIStyles';

export default function SearchBar({ stories, paths }) {
  const defaultProps = {
    options: stories,
    getOptionLabel: (story) => story.title,
  };

  const [value, setValue] = useState(null);
  const [path, setPath] = useState(null);

  const submitSearch = () => {
    const searchIndex = stories.indexOf(value);
    if (paths[searchIndex]) {
      setPath(paths[searchIndex]);
      setValue(null);
    }
  };

  const classes = useStyles();

  return (
    <>
      {path && <Redirect to={`/${path}`} />}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitSearch(value);
        }}
      >
        <IconButton
          color='default'
          aria-label='search articles'
          onClick={() => submitSearch(value)}
        >
          <SearchOutlinedIcon />
        </IconButton>
        <Autocomplete
          {...defaultProps}
          className={classes.searchBar}
          noOptionsText={'No matching articles found'}
          value={value}
          onChange={(e, newValue) => {
            e.preventDefault();
            setValue(newValue);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              className={classes.searchBar}
              label='Search articles'
              variant='outlined'
            />
          )}
        />
      </form>
    </>
  );
}
