
import { FC } from "react";
import { useForm } from "react-hook-form";
import { FormValues, SearchProps } from "../utils/Props";

const Search: FC<SearchProps> = ({ setSearch }) => {

  const { register, handleSubmit, reset } = useForm<FormValues>();

  const submit = (data: FormValues) => {
    setSearch(data.text);
    reset();
  }

  return (
    <div className="element flex flex-row items-center rounded-md px-4">
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
      <form onSubmit={handleSubmit(submit)}>
        <input
          className="w-full dark:bg-dark-blue dark:text-white focus:outline-none p-3"
          type="search"
          placeholder="Search for a country"
          {...register("text")}
        />
      </form>
    </div>
  );
};

export default Search;
