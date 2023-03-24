import classes from "./Search.module.css";

export default function Search() {
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Search..."
          className={`form-control ${classes.inputField}`}
        />
      </form>
    </div>
  );
}
