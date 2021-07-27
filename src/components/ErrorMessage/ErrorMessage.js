import Modal from '@material-ui/core/Modal';
import useStyles from '../../util/materialUIStyles';

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
