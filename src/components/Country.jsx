import { Link } from "react-router-dom";

const Country = ({ name, population, region, capital, flag }) => {
  return (
    <div className="h-[339px] w-[262px] overflow-hidden rounded-md bg-white shadow-lg dark:bg-dark-blue">
      <Link to={`${name}`}>
        <div className="h-1/2">
          <img
            loading="lazy"
            className="h-full w-full object-cover"
            src={flag}
            alt="Country Flag"
          />
        </div>
        <div className="p-5">
          <h2>{name}</h2>
          <p>
            <span>Population: </span>
            {population.toLocaleString("en-US")}
          </p>
          <p>
            <span>Region: </span>
            {region}
          </p>
          <p>
            <span>Capital: </span>
            {capital}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Country;
