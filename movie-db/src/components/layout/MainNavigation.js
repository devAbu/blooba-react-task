import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

export default function MainNavigation() {
  return (
    <header className={classes.header}>
      <div>
        <Link to="/" className={classes.text}>
          Movie DB
        </Link>
      </div>
      <nav>
        <li className={classes.listItem}>
          <Link to="/movies" className={classes.text}>
            Movies
          </Link>
        </li>
        <li className={classes.listItem}>
          <Link to="/series" className={classes.text}>
            Series
          </Link>
        </li>
      </nav>
    </header>
  );
}
