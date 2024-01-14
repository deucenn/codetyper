import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <>
      <NavLink to="/." className="px-5">&lt;home/&gt;</NavLink>
      <NavLink to="/about" className="px-5">&lt;about/&gt;</NavLink>
      <NavLink to="/settings" className="px-5">&lt;settings/&gt;</NavLink>
    </>
  );
};

const Nav = () => {
  return (
    <nav className="w-1/2 jusitfy-between text-slate-200">
      <NavLinks />
    </nav>
  );
};

export default Nav;
