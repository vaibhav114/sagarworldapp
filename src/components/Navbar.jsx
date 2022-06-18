import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  return (
    <nav className="flex justify-between">
      <h1>Where in the world?</h1>
      <ThemeSwitcher />
    </nav>
  );
};

export default Navbar;
