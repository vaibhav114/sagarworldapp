import { Fade } from "react-awesome-reveal";
import Country from "./Country";

const CountryList = ({ countries }) => {
  return (
    <Fade>
      <div className="mx-auto mt-5 place-items-center place-content-center grid w-[90%] grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
        {countries.edges.map(({ node }) => {
          return <Country key={node.name} {...node} />;
        })}
      </div>
    </Fade>
  );
};

export default CountryList;
