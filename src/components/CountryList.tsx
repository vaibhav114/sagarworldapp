import { memo } from "react";
import { CountryNodeProps } from "../utils/Props";
import Country from "./Country";

interface Props {
  countries: CountryNodeProps[];
}

// if countries is empty, then display a message
const CountryListEmpty = () => {
  return (
    <div className="flex items-center justify-center text-xl">
      <p>No countries found</p>
    </div>
  );
};

const CountryList = ({ countries }: Props) => {
  return (
    <>
      {countries.length === 0 && <CountryListEmpty />}
      <div className="mb-4 grid grid-cols-1 place-items-center gap-x-[73px] gap-y-[70px] sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {countries?.map(({ node }) => {
          return <Country key={node.name} {...node} />;
        })}
      </div>
    </>
  );
};

export default memo(CountryList);
