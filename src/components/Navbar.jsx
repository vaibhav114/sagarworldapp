const Navbar = () => {
  return (
    <nav className="shadow">
      <div className="mx-auto flex w-[90%] justify-between py-5">
        <h1 className="font-extrabold text-lg">Where in the world?</h1>
        <button className="font-semibold" type="button">
          Dark Mode
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
