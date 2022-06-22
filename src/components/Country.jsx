import { Link } from "react-router-dom";

const Country = ({ name, population, region, capital, flag }) => {
  return (
    <div className="element-style h-[339px] w-[262px] overflow-hidden rounded-md">
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
          <h2 className="mb-4 text-lg font-bold">{name}</h2>
          <div className="space-y-1 font-semibold">
            <p>
              Population:{" "}
              <span className="font-light text-very-light-gray">
                {population.toLocaleString("en-US")}
              </span>
            </p>
            <p>
              Region:{" "}
              <span className="font-light text-very-light-gray">{region}</span>
            </p>
            <p>
              Capital:{" "}
              <span className="font-light text-very-light-gray">{capital}</span>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Country;
