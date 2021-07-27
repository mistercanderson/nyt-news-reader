import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 350,
    height: 150,
    backgroundColor: 'white',
    boxShadow: theme.shadows[5],
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
}));

export default function ErrorMessage() {
  const classes = useStyles();

  const body = (
    <div className={classes.paper}>
      <h2 className={classes.h2} id='error-title'>
        Sorry,
      </h2>
      <p className={classes.p} id='error-description'>
        Something went wrong & we could not connect to the New York Times web
        service. Please try again later.
      </p>
    </div>
  );

  return (
    <div className={classes.container}>
      <Modal
        className={classes.container}
        open={true}
        aria-labelledby='error-title'
        aria-describedby='error-description'
      >
        {body}
      </Modal>
    </div>
  );
}
