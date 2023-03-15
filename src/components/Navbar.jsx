import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContextProvider";

export default function Navbar() {
  const { arrayFav } = useContext(UserContext);

  return (
    <nav
      className="d-flex justify-content-center align-items-center gap-4 bg-secondary"
      style={{ height: "10vh" }}
    >
      <NavLink to="/" className="text-decoration-none text-dark">
        Home
      </NavLink>

      <NavLink to="/favorites" className="text-decoration-none text-dark">
        Favoritos
        {arrayFav.length === 0 ? null : (
          <span
            className="border rounded-circle m-2 p-1 d-inline-block text-center"
            style={{ minWidth: "35px" }}
          >
            {arrayFav.length}
          </span>
        )}
      </NavLink>
    </nav>
  );
}
