const Search = ({ search, setSearch }) => {
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="flex h-[56px] items-center rounded-md bg-white shadow-md dark:bg-dark-blue sm:basis-[480px]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="ml-3 h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          clipRule="evenodd"
        />
      </svg>
      <form role={`search`}>
        <input
          value={search}
          className="border-none bg-white text-dark-blue-light-text focus:ring-0 dark:bg-dark-blue dark:text-white"
          onChange={handleChange}
          type="search"
          placeholder="Search for a country"
          aria-label="Search for a country by name"
        />
      </form>
    </div>
  );
};

export default Search;
