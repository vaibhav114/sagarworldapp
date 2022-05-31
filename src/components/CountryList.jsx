import Country from "./Country";

const CountryList = ({ countries }) => {
  return (
    <div className="mx-auto mt-5 grid w-[90%] grid-cols-1 place-content-center place-items-center gap-x-10 gap-y-5 md:grid-cols-2 lg:grid-cols-4">
      {countries.edges.map(({ node }) => {
        return <Country key={node.name} {...node} />;
      })}
    </div>
  );
};

export default CountryList;
