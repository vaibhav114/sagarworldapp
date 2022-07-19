import { FC, memo } from "react";
import { CountryNodeProps } from "../utils/Props";
import Country from "./Country";

interface Props {
  countries: CountryNodeProps[];
}

// if countries is empty, then display a message
const CountryListEmpty = () => {
  return (
    <div className="flex items-center justify-center">
      <h1>No countries found</h1>
    </div>
  );
};

const CountryList: FC<Props> = ({ countries }) => {
  return (
    <>
      {countries?.length === 0 && <CountryListEmpty />}
      <div className="grid place-items-center gap-14 mobileL:grid-cols-2 tablet:grid-cols-2 laptop:grid-cols-3 laptopL:grid-cols-4">
        {countries?.map(({ node }) => {
          return <Country key={node.name} {...node} />;
        })}
      </div>
    </>
  );
};

export default memo(CountryList);
