import { Link } from 'react-router-dom';
import styles from './Button.module.css';

const BackButton = () => {
  //   const { state } = useLocation();
  //   console.log(state);
  return (
    //  state?.from && (
    //  <Link to={state.from}>
    <button type="button" className={styles.button}>
      Back
    </button>
    //  </Link>
    //  )
  );
};

export default BackButton;
