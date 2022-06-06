import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  return (
    <nav className="bg-white shadow sticky top-0 z-10 dark:bg-blue-100">
      <div className="mx-auto flex w-[90%] justify-between py-5 md:w-[85%]">
        <h1 className="text-lg font-extrabold md:text-xl">
          <a href="/">Where in the world?</a>
        </h1>
        <ThemeSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;
