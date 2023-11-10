import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar bg-base-100">
      <div className="cite-container flex justify-between items-center w-full">
        <Link to="/" className="btn btn-success normal-case text-xl">
          Where in the world?
        </Link>
        <button>Click</button>
      </div>
    </header>
  );
}

export default Navbar;
