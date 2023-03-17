import "bootstrap/dist/css/bootstrap.min.css";
import Cards from "../components/ui/Cards";

export default function Movies() {
  return (
    <div>
      <div className="col-12 text-center">
        <h1>Movies</h1>
        <div className="container">
          <div className="row">
            <Cards />
            <Cards />
            <Cards />
          </div>
        </div>
      </div>
    </div>
  );
}
