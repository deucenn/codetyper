import Logo from "./Logo";
import Nav from "./Nav";
import Title from "./Title";

//#endregion
const Header = () => {
  return (
    <header className="sticky top-0 z-[20] mx-auto flex w-full items-center justify-center p-[2em]">
      <Logo className="flex items-center jusitfy-center align-middle" />
      <Title className="flex justify-center align-middle" />
      <Nav />
    </header>
  );
};

export default Header;
