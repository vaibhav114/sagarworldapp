import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  return (
    <nav className="element sticky top-0 z-50 py-8 mobileL:py-5">
      <div className="container-custom flex items-center justify-between">
        <h1 className="text-xl font-semibold">Where in the world?</h1>
        <ThemeSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;
