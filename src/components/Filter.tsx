import { Listbox, Transition } from "@headlessui/react";
import { FC } from "react";
import { FilterProps } from "../utils/Props";

const Filter: FC<FilterProps> = ({
  regions,
  selectregion,
  setSelectRegion,
}) => {
  const handleClick = () => {
    const FilterIcon = document.getElementsByClassName("filter-icon");
    FilterIcon[0].classList.toggle("rotate-180");
  };

  return (
    <Listbox
      as={`div`}
      className={`flex w-52 flex-col`}
      value={selectregion}
      onChange={setSelectRegion}
    >
      <Listbox.Button
        onClick={handleClick}
        className="element relative rounded-md p-4 text-left"
      >
        <span>{selectregion.name}</span>
        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`filter-icon h-5 w-5 transition duration-300 ease-out`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </Listbox.Button>

      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Listbox.Options
          className={`element absolute mt-1 w-full rounded-md p-3 focus-within:outline-none`}
        >
          {regions
            .filter(({ id }) => id !== selectregion.id)
            .map((region) => (
              <Listbox.Option
                className={({ active }) =>
                  `cursor-pointer py-1 ${
                    active ? "bg-dark-blue-dark-background/40" : ""
                  }`
                }
                key={region.id}
                value={region}
              >
                {region.name}
              </Listbox.Option>
            ))}
        </Listbox.Options>
      </Transition>
    </Listbox>
  );
};

export default Filter;
