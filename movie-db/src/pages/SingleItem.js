import { useLocation } from "react-router-dom";
import classes from "./SingleItem.module.css";
export default function SingleItem(props) {
  let { state } = useLocation();
  console.log(state);
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className={classes.box}>
            <div className="text-center">
              <h2 className={classes.title}>{state.itemTitle}</h2>
              <img
                src={state.itemImg.img}
                alt={state.imgTitle}
                className={classes.img}
              />
              <p className={classes.text}>{state.itemOverview}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
