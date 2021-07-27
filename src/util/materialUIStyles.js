import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  searchBar: {
    width: '20em',
    '@media (max-width: 480px)': {
      width: '11em',
    },
  },
  paper: {
    position: 'absolute',
    width: 350,
    height: 150,
    backgroundColor: 'white',
    padding: '2em 2em 3.2em 2em',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    '@media (max-width: 480px)': {
      width: '70vw',
    },
  },

  h2: {
    fontWeight: 700,
    fontSize: '2em',
  },

  p: {
    lineHeight: '1.3',
  },

  container: {
    maxWidth: '100%',
  },
});

export default useStyles
