import { Listbox } from "@headlessui/react";

const Filter = ({ regions, selectregion, setSelectRegion }) => {
  return (
    <div className="mt-5 w-48 rounded-md bg-white px-5 py-3 shadow-md dark:bg-blue-100 sm:mt-0">
      <Listbox value={selectregion} onChange={setSelectRegion}>
        <Listbox.Button className="flex w-full items-center justify-between">
          {selectregion.name}
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
        <Listbox.Options className="absolute z-10 mt-4 w-48 -translate-x-5 space-y-1 rounded-md bg-white p-4 shadow-md dark:bg-blue-100">
          {regions.map((region) => (
            <Listbox.Option
              key={region.id}
              value={region}
              className={`relative cursor-pointer`}
            >
              {region.name}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
};

export default Filter;
