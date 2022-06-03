import { useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="flex w-max items-center space-x-2 rounded-md bg-white px-5 py-2 shadow-md dark:bg-blue-100 sm:w-[35%]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          clipRule="evenodd"
        />
      </svg>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        className="w-[80%]  dark:bg-blue-100"
        placeholder="Search for a country"
      />
    </div>
  );
};

export default Search;
