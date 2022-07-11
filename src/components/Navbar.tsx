import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  return (
    <nav className="element-style sticky top-0 z-50 py-10 shadow-md mobileL:py-6">
      <div className="mobileL:containe mx-auto flex w-[92%] items-center justify-between">
        <h1 className="text-lg font-medium mobileL:text-xl mobileL:font-bold">
          Where in the world?
        </h1>
        <ThemeSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;
