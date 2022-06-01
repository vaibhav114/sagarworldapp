import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  return (
    <nav className="bg-blue-100 shadow">
      <div className="mx-auto flex w-[90%] justify-between py-5 md:w-[87%]">
        <h1 className="text-lg font-extrabold">Where in the world?</h1>
        <ThemeSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;
