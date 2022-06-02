import { Listbox } from "@headlessui/react";
import { useState } from "react";

const REGION = [
  { id: 1, name: "Filter by Region" },
  { id: 2, name: "Africa" },
  { id: 3, name: "America" },
  { id: 4, name: "Asia" },
  { id: 5, name: "Europe" },
  { id: 6, name: "Oceania" },
];

const Filter = () => {
  const [selectedRegion, setSelectedRegion] = useState(REGION[0]);

  return (
    <div className="mt-5 w-48 rounded-md bg-white px-5 py-3 shadow-md dark:bg-blue-100 sm:mt-0">
      <Listbox value={selectedRegion} onChange={setSelectedRegion}>
        <Listbox.Button className="flex w-full items-center justify-between">
          {selectedRegion.name}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Listbox.Button>
        <Listbox.Options className="absolute z-50 w-48 -translate-x-5 space-y-1 rounded-md bg-white p-4 shadow-md dark:bg-blue-100">
          {REGION.slice(1).map((item) => (
            <Listbox.Option
              className={`cursor-pointer`}
              key={item.id}
              value={item}
            >
              {item.name}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
};

export default Filter;
