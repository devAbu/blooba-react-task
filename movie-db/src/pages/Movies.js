import { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Cards from "../components/ui/Cards";
import Search from "../components/ui/Search";

export default function Movies() {
  const [loading, setLoading] = useState(true);
  const [gotMovies, setMovies] = useState([]);

  useEffect(() => {
    Promise.all([
      fetch(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=861bb6f6f3845a502354d4d171e5c092&page=1"
      ),
      fetch(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=861bb6f6f3845a502354d4d171e5c092&page=2"
      ),
    ])
      .then(([response1, response2]) =>
        Promise.all([response1.json(), response2.json()])
      )
      .then(([data1, data2]) => {
        let data = { results: [...data1.results, ...data2.results] };
        const arrData = Object.values(data);
        setLoading(false);
        setMovies(arrData);
      });
  }, []);

  if (loading) {
    return (
      <div className="text-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <div className="col-12 text-center">
        <h1 className="mb-5">Movies</h1>
        <Search />
        <div className="container-fluid">
          <div className="row">
            <Cards data={gotMovies} />
          </div>
        </div>
      </div>
    </div>
  );
}
