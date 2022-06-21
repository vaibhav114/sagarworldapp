import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  return (
    <nav className="sticky shadow-md top-0 bg-white h-[80px] py-[30px] dark:bg-dark-blue">
      <div className="containe flex items-center justify-between">
        <h1>Where in the world?</h1>
        <ThemeSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;
