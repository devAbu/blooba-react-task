import "bootstrap/dist/css/bootstrap.min.css";
import Card from "../components/ui/Card";

export default function Home() {
  return (
    <div>
      <div className="col-12 text-center">
        <h1>Movie Database</h1>
        <div className="container">
          <div className="row">
            <Card title="movies" />
            <Card title="series" />
          </div>
        </div>
      </div>
    </div>
  );
}
