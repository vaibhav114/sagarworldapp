import { SearchProps } from "../utils/Props";

const Search = ({ search, setSearch }: SearchProps) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  return (
    <div className="element flex max-w-md flex-row items-center overflow-hidden rounded-md px-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-dark-gray dark:text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <form role={`search`}>
        <input
          className="w-72 border-none bg-white p-4 text-dark-gray focus:outline-none dark:bg-dark-blue dark:text-white dark:placeholder:text-white mobileL:w-96"
          type="search"
          value={search}
          onChange={handleInputChange}
          placeholder="Search for a country..."
          aria-label="Search for a country by name"
        />
      </form>
    </div>
  );
};

export default Search;
