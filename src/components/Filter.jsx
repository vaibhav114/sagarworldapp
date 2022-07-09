import { Listbox, Transition } from "@headlessui/react";

const Filter = ({ regions, selectregion, setSelectRegion }) => {
  return (
    <>
      <Listbox
        className="element-style relative flex items-center rounded-md p-[18px] shadow-md sm:basis-48"
        as={`div`}
        value={selectregion}
        onChange={setSelectRegion}
      >
        {({ open }) => (
          <>
            <Listbox.Button
              className={`flex w-full items-center justify-between`}
            >
              {selectregion.name}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`ml-8 h-5 w-5 sm:ml-0 ${
                  open ? `rotate-180 transition-all` : `transition-all`
                }`}
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
            <Transition
              className={`element-style absolute top-16 w-full -translate-x-5 cursor-pointer rounded-md p-5`}
            >
              <Listbox.Options>
                {regions.slice(1).map((region) => (
                  <Listbox.Option
                    className={`mb-2 hover:text-dark-gray`}
                    key={region.id}
                    value={region}
                  >
                    {region.name}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </>
        )}
      </Listbox>
    </>
  );
};

export default Filter;
