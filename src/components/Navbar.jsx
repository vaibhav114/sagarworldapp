import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  return (
    <nav className="element-style sticky top-0 z-50 py-6 shadow-md">
      <div className="containe flex items-center justify-between">
        <h1 className="mobileL:text-xl mobileL:font-bold">Where in the world?</h1>
        <ThemeSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;
