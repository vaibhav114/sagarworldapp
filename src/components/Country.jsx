import { Link } from "react-router-dom";

const Country = ({ name, population, region, capital, flag }) => {
  return (
    <div className="w-[300px] rounded-sm bg-white shadow-2xl dark:bg-dark-blue">
      <Link to={`${name}`}>
        <img loading="eager" src={flag} alt="Country Flag" />
        <div>
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
