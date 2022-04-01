import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <span>
        <NavLink to="/">Home</NavLink>
      </span>
    </>
  );
}

export default Header;
