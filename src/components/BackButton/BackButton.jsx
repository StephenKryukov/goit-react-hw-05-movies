import { Link, useLocation } from 'react-router-dom';

import style from './Button.module.css';

export default function BackButton() {
  const { state } = useLocation();
  return (
    state?.from && (
      <Link to={state.from}>
        <button type="button" className={style.button}>
          <span>Back</span>
        </button>
      </Link>
    )
  );
}
