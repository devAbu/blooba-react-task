import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./Card.module.css";

export default function Card(props) {
  return (
    <div className="col-6">
      <div className={classes.card}>
        <div>
          <h5>{props.title}</h5>
          <Link to={`/${props.title}`} className={classes.text}>
            {props.title}
          </Link>
        </div>
      </div>
    </div>
  );
}
