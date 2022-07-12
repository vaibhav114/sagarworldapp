import { useState } from "react";
import { Listbox, Transition } from "@headlessui/react";

const people = [
  { id: 1, name: "Durward Reynolds" },
  { id: 2, name: "Kenton Towne" },
  { id: 3, name: "Therese Wunsch" },
  { id: 4, name: "Benedict Kessler" },
  { id: 5, name: "Katelyn Rohan" },
];

function Filter() {
  const [selectedPerson, setSelectedPerson] = useState(people[0]);

  return (
    <Listbox
      as={`div`}
      className={`flex w-52 flex-col`}
      value={selectedPerson}
      onChange={setSelectedPerson}
    >
      <Listbox.Button className={`element rounded-md p-4`}>
        {selectedPerson.name}
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
          className={`element absolute mt-1 w-full rounded-md p-3`}
        >
          {people.map((person) => (
            <Listbox.Option
              className={`cursor-pointer py-1 hover:text-dark-gray`}
              key={person.id}
              value={person}
            >
              {person.name}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Transition>
    </Listbox>
  );
}

export default Filter;
