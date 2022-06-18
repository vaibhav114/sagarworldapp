import Country from "./Country";

const CountryList = ({ countries }) => {
  return (
    <div>
      {countries.map(({ node }) => {
        return <Country key={node.name} {...node} />;
      })}
    </div>
  );
};

export default CountryList;
