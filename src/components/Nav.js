import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <>
      <NavLink to="/." className="px-5">&lt;home/&gt;</NavLink>
      <NavLink to="/ranking" className="px-5">&lt;ranking/&gt;</NavLink>
      <NavLink to="/settings" className="px-5">&lt;settings/&gt;</NavLink>
    </>
  );
};

const Nav = () => {
  return (
    <nav className="w-1/2 jusitfy-between">
      <NavLinks />
    </nav>
  );
};

export default Nav;
