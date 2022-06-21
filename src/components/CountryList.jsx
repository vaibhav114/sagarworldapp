import Country from "./Country";

const CountryList = ({ countries }) => {
  return (
    <div className="grid grid-cols-1 place-items-center gap-x-[73px] gap-y-[70px] sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {countries?.map(({ node }) => {
        return <Country key={node.name} {...node} />;
      })}
    </div>
  );
};

export default CountryList;
