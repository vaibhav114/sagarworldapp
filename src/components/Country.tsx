import { memo } from "react";
import { Link } from "react-router-dom";
import { CountryProps } from "../utils/Props";

const Country = ({
  id,
  name,
  population,
  region,
  capital,
  flag,
}: CountryProps) => {
  return (
    <div className="element-style h-[339px] w-[262px] overflow-hidden rounded-md">
      <div className="h-1/2">
        <Link to={`/${name}/${id}`}>
          <img
            loading="lazy"
            className="h-full w-full object-cover"
            src={flag}
            alt="Country Flag"
          />
        </Link>
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
    </div>
  );
};

export default memo(Country);
