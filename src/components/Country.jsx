import { memo } from "react";
import { Link } from "react-router-dom";

const Country = ({ id, name, population, region, capital, flag }) => {
  return (
    <div className="element-style h-[339px] w-[262px] overflow-hidden rounded-md">
      <Link to={`/${name}/${id}`}>
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
              Population: <span>{population.toLocaleString("en-US")}</span>
            </p>
            <p>
              Region: <span>{region}</span>
            </p>
            <p>
              Capital: <span>{capital}</span>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default memo(Country);
