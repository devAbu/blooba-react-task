import classes from "./Cards.module.css";
import { Link } from "react-router-dom";

export default function Cards(props) {
  console.log(props.data[0]);

  const topData = props.data[0].slice(0, -10);
  return topData.map((singleMovie) => {
    const id = singleMovie["id"];
    const overview = singleMovie["overview"];
    let title =
      "title" in singleMovie ? singleMovie["title"] : singleMovie["name"];

    const imgPath = singleMovie["backdrop_path"];
    const img = `https://image.tmdb.org/t/p/original${imgPath}`;
    return (
      <div key={singleMovie.id} className="col-12 col-md-4">
        <Link
          to={`/item/${id}`}
          className={classes.link}
          state={{
            itemTitle:
              "title" in singleMovie
                ? singleMovie["title"]
                : singleMovie["name"],
            itemImg: { img },
            itemOverview: overview,
          }}
        >
          <div className={classes.boxes}>
            <h4 className={classes.title}>{title}</h4>
            <img src={img} alt={title} className={classes.img} />
          </div>
        </Link>
      </div>
    );
  });
}
