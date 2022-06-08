import { Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const Country = ({ name, population, region, capital, flag }) => {
  const showDetail = () => {
    <Link to={`/detail/${name}`} />;
  };
  return (
    <Slide triggerOnce="true" direction="up">
      <div
        onClick={showDetail}
        className="mb-4 flex h-max w-max  cursor-pointer flex-col overflow-hidden rounded bg-white shadow-md dark:bg-blue-100"
      >
        <img src={flag} className="h-[158px] w-[264px]" alt="Country Flag" />
        <div className="space-y-1 p-5">
          <p className="mb-3 font-extrabold">{name}</p>
          <p>
            <span className="font-semibold">Population: </span>
            {population.toLocaleString("en-US")}
          </p>
          <p>
            <span className="font-semibold">Region: </span>
            {region}
          </p>
          <p>
            <span className="font-semibold">Capital: </span>
            {capital}
          </p>
        </div>
      </div>
    </Slide>
  );
};

export default Country;
